"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.mappingController = mappingController;
exports.mappingMethod = mappingMethod;
exports.mappingPaths = mappingPaths;
exports.mappingRouterToController = mappingRouterToController;
var _ApiDecorator = require("./ApiDecorator");
var _fs = _interopRequireDefault(require("fs"));
var _koaRouter = _interopRequireDefault(require("koa-router"));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var router = (0, _koaRouter["default"])();

/**
 * 将 controllers 与其标注配置的 path 绑定
 * @param controller
 * @param method
 * @param requestMethod
 * @param requestRoute
 */
function mappingPaths(controller, method, requestMethod, requestRoute) {
  var config = {
    tags: [controller[_ApiDecorator.REQUEST_TAGS]],
    summary: method[_ApiDecorator.REQUEST_SUMMARY],
    description: method[_ApiDecorator.REQUEST_DESCRIPTION],
    consumes: ['application/json'],
    produces: ['application/json'],
    parameters: []
  };

  // 添加 PathVariable
  if (_ApiDecorator.REQUEST_PARAMETERS_PATH in method) {
    var _iterator = _createForOfIteratorHelper(method[_ApiDecorator.REQUEST_PARAMETERS_PATH]),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        config.parameters.push({
          name: item === null || item === void 0 ? void 0 : item.value,
          "in": 'query',
          description: item === null || item === void 0 ? void 0 : item.notes,
          required: item === null || item === void 0 ? void 0 : item.required
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  // 添加 ApiParam
  if (_ApiDecorator.REQUEST_PARAMETERS_PARAM in method) {
    var _iterator2 = _createForOfIteratorHelper(method[_ApiDecorator.REQUEST_PARAMETERS_PARAM]),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _item = _step2.value;
        config.parameters.push({
          name: _item === null || _item === void 0 ? void 0 : _item.value,
          "in": 'body',
          description: _item === null || _item === void 0 ? void 0 : _item.notes,
          required: _item === null || _item === void 0 ? void 0 : _item.required,
          type: _item === null || _item === void 0 ? void 0 : _item.type
        });
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
}

/**
 * 绑定 request method
 * @param controller
 * @param method
 */
function mappingMethod(controller, method) {
  var requestMethod = method[_ApiDecorator.REQUEST_METHOD],
    requestRoute = method[_ApiDecorator.REQUEST_ROUTE];
  mappingPaths(controller, method, requestMethod, requestRoute);

  // add mapping route
  // console.log(`register URL mapping: ${requestMethod.toUpperCase()} ${requestRoute}`);
  router[requestMethod](requestRoute, method);
}

/**
 * 绑定 controllers
 * @param controller
 */
function mappingController(controller) {
  if (!controller) {
    return;
  }

  // traversal all rest class methods
  var _iterator3 = _createForOfIteratorHelper(Object.getOwnPropertyNames(controller)),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var methodName = _step3.value;
      if (!methodName || !controller[methodName] || !controller[methodName][_ApiDecorator.REQUEST_METHOD] || !controller[methodName][_ApiDecorator.REQUEST_ROUTE]) {
        continue;
      }
      mappingMethod(controller, controller[methodName]);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}

/**
 * 遍历 /app/controller 文件夹下的所有文件
 * @param dir
 */
function mappingRouterToController(dir) {
  // traversal all controll file
  _fs["default"].readdirSync(dir + '/app/controller').forEach(function (file) {
    return mappingController(require(dir + '/app/controller/' + file)["default"]);
  });
  return router.routes();
}
var _default = mappingRouterToController;
exports["default"] = _default;