"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAnalgesiaDataByPatientId = getAnalgesiaDataByPatientId;
exports.createAnalgesiaData = createAnalgesiaData;
exports.updateAnalgesiaData = updateAnalgesiaData;
exports.createOrUpdateAnalgesiaData = createOrUpdateAnalgesiaData;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _AnalgesiaDao = _interopRequireDefault(require("../dao/AnalgesiaDao.js"));

var _Response = require("../utils/Response.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * 获取某个 Patient ID 的 Analgesia 数据
 * @param patientId
 * @returns {Promise<string>}
 */
function getAnalgesiaDataByPatientId(_x) {
  return _getAnalgesiaDataByPatientId.apply(this, arguments);
}
/**
 * 创建一批 Analgesia 数据
 *  data: {
 *      patientId: String
 *      analgesiaData: Array
 *  }
 *
 * @param patientId
 * @param data
 * @returns {Promise<*>}
 */


function _getAnalgesiaDataByPatientId() {
  _getAnalgesiaDataByPatientId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(patientId) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _Response.buildSuccess;
            _context.next = 3;
            return _AnalgesiaDao["default"].getAnalgesiaDataByPatientId(patientId);

          case 3:
            _context.t1 = _context.sent;
            return _context.abrupt("return", (0, _context.t0)(_context.t1));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getAnalgesiaDataByPatientId.apply(this, arguments);
}

function createAnalgesiaData(_x2, _x3) {
  return _createAnalgesiaData.apply(this, arguments);
}
/**
 * 更新一批 Analgesia 数据
 *  data: {
 *      patientId: String
 *      analgesiaData: Array
 *  }
 *
 * @param patientId
 * @param data
 * @returns {Promise<*>}
 */


function _createAnalgesiaData() {
  _createAnalgesiaData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(patientId, data) {
    var error, _iterator, _step, item, analgesiaData;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            error = [];
            _iterator = _createForOfIteratorHelper(data);
            _context2.prev = 2;

            _iterator.s();

          case 4:
            if ((_step = _iterator.n()).done) {
              _context2.next = 22;
              break;
            }

            item = _step.value;
            analgesiaData = _objectSpread(_objectSpread({}, item), {}, {
              patientId: patientId
            });
            _context2.next = 9;
            return _AnalgesiaDao["default"].isAnalgesiaDataExist(patientId, analgesiaData.timePoint);

          case 9:
            if (!_context2.sent) {
              _context2.next = 12;
              break;
            }

            error.push("Patient ID ".concat(patientId, ", timePoint ").concat(analgesiaData.timePoint, " data is exist."));
            return _context2.abrupt("continue", 20);

          case 12:
            _context2.prev = 12;
            _context2.next = 15;
            return _AnalgesiaDao["default"].createAnalgesiaData(analgesiaData);

          case 15:
            _context2.next = 20;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](12);
            error.push("Patient ID ".concat(patientId, ", timePoint ").concat(analgesiaData.timePoint, " create failure."));

          case 20:
            _context2.next = 4;
            break;

          case 22:
            _context2.next = 27;
            break;

          case 24:
            _context2.prev = 24;
            _context2.t1 = _context2["catch"](2);

            _iterator.e(_context2.t1);

          case 27:
            _context2.prev = 27;

            _iterator.f();

            return _context2.finish(27);

          case 30:
            if (!(error.length > 0)) {
              _context2.next = 32;
              break;
            }

            return _context2.abrupt("return", (0, _Response.buildError)(error.join(' ')));

          case 32:
            return _context2.abrupt("return", (0, _Response.buildSuccess)(data.length));

          case 33:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 24, 27, 30], [12, 17]]);
  }));
  return _createAnalgesiaData.apply(this, arguments);
}

function updateAnalgesiaData(_x4, _x5) {
  return _updateAnalgesiaData.apply(this, arguments);
}
/**
 * 创建或更新一批 Analgesia 数据
 *  data: {
 *      patientId: String
 *      analgesiaData: Array
 *  }
 *
 * @param patientId
 * @param data
 * @returns {Promise<*>}
 */


function _updateAnalgesiaData() {
  _updateAnalgesiaData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(patientId, data) {
    var error, _iterator2, _step2, item, analgesiaData;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            error = [];
            _iterator2 = _createForOfIteratorHelper(data);
            _context3.prev = 2;

            _iterator2.s();

          case 4:
            if ((_step2 = _iterator2.n()).done) {
              _context3.next = 22;
              break;
            }

            item = _step2.value;
            analgesiaData = _objectSpread(_objectSpread({}, item), {}, {
              patientId: patientId
            });
            _context3.next = 9;
            return _AnalgesiaDao["default"].isAnalgesiaDataExist(patientId, analgesiaData.timePoint);

          case 9:
            if (_context3.sent) {
              _context3.next = 12;
              break;
            }

            error.push("Patient ID ".concat(patientId, ", timePoint ").concat(analgesiaData.timePoint, " data is not exist."));
            return _context3.abrupt("continue", 20);

          case 12:
            _context3.prev = 12;
            _context3.next = 15;
            return _AnalgesiaDao["default"].updateAnalgesiaData(analgesiaData);

          case 15:
            _context3.next = 20;
            break;

          case 17:
            _context3.prev = 17;
            _context3.t0 = _context3["catch"](12);
            error.push("Patient ID ".concat(patientId, ", timePoint ").concat(analgesiaData.timePoint, " update failure."));

          case 20:
            _context3.next = 4;
            break;

          case 22:
            _context3.next = 27;
            break;

          case 24:
            _context3.prev = 24;
            _context3.t1 = _context3["catch"](2);

            _iterator2.e(_context3.t1);

          case 27:
            _context3.prev = 27;

            _iterator2.f();

            return _context3.finish(27);

          case 30:
            if (!(error.length > 0)) {
              _context3.next = 32;
              break;
            }

            return _context3.abrupt("return", (0, _Response.buildError)(error.join(' ')));

          case 32:
            return _context3.abrupt("return", (0, _Response.buildSuccess)(data.length));

          case 33:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 24, 27, 30], [12, 17]]);
  }));
  return _updateAnalgesiaData.apply(this, arguments);
}

function createOrUpdateAnalgesiaData(_x6, _x7) {
  return _createOrUpdateAnalgesiaData.apply(this, arguments);
}

function _createOrUpdateAnalgesiaData() {
  _createOrUpdateAnalgesiaData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(patientId, data) {
    var error, _iterator3, _step3, item, analgesiaData;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            error = [];
            _iterator3 = _createForOfIteratorHelper(data);
            _context4.prev = 2;

            _iterator3.s();

          case 4:
            if ((_step3 = _iterator3.n()).done) {
              _context4.next = 17;
              break;
            }

            item = _step3.value;
            analgesiaData = _objectSpread(_objectSpread({}, item), {}, {
              patientId: patientId
            });
            _context4.prev = 7;
            _context4.next = 10;
            return _AnalgesiaDao["default"].createOrUpdateAnalgesiaData(analgesiaData);

          case 10:
            _context4.next = 15;
            break;

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](7);
            error.push("Patient ID ".concat(patientId, ", timePoint ").concat(analgesiaData.timePoint, " update failure."));

          case 15:
            _context4.next = 4;
            break;

          case 17:
            _context4.next = 22;
            break;

          case 19:
            _context4.prev = 19;
            _context4.t1 = _context4["catch"](2);

            _iterator3.e(_context4.t1);

          case 22:
            _context4.prev = 22;

            _iterator3.f();

            return _context4.finish(22);

          case 25:
            if (!(error.length > 0)) {
              _context4.next = 27;
              break;
            }

            return _context4.abrupt("return", (0, _Response.buildError)(error.join(' ')));

          case 27:
            return _context4.abrupt("return", (0, _Response.buildSuccess)(data.length));

          case 28:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 19, 22, 25], [7, 12]]);
  }));
  return _createOrUpdateAnalgesiaData.apply(this, arguments);
}

var _default = {
  getAnalgesiaDataByPatientId: getAnalgesiaDataByPatientId,
  createAnalgesiaData: createAnalgesiaData,
  updateAnalgesiaData: updateAnalgesiaData,
  createOrUpdateAnalgesiaData: createOrUpdateAnalgesiaData
};
exports["default"] = _default;