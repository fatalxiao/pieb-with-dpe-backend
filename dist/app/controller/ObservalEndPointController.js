"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));
var _ObservalEndPointService = _interopRequireDefault(require("../service/ObservalEndPointService.js"));
var _ApiDecorator = require("../utils/ApiDecorator.js");
var _config = require("../../config");
var _dec, _dec2, _class, _class2;
var ObservalEndPointController = (_dec = (0, _ApiDecorator.Api)({
  tags: 'ObservalEndPoint'
}), _dec2 = (0, _ApiDecorator.GetMapping)({
  value: "".concat(_config.baseUrl, "/observalEndPoint/getObservalEndPoints")
}), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function ObservalEndPointController() {
    (0, _classCallCheck2["default"])(this, ObservalEndPointController);
  }
  (0, _createClass2["default"])(ObservalEndPointController, null, [{
    key: "getObservalEndPoints",
    value:
    /**
     * 获取所有 groups 的数据
     * @param ctx
     * @returns {Promise<void>}
     */
    function () {
      var _getObservalEndPoints = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _ObservalEndPointService["default"].getObservalEndPoints();
              case 2:
                ctx.response.body = _context.sent;
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function getObservalEndPoints(_x) {
        return _getObservalEndPoints.apply(this, arguments);
      }
      return getObservalEndPoints;
    }()
  }]);
  return ObservalEndPointController;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class2, "getObservalEndPoints", [_dec2], Object.getOwnPropertyDescriptor(_class2, "getObservalEndPoints"), _class2)), _class2)) || _class);
var _default = ObservalEndPointController;
exports["default"] = _default;