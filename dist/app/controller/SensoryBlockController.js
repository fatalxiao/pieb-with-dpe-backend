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

var _SensoryBlockService = _interopRequireDefault(require("../service/SensoryBlockService.js"));

var _ApiDecorator = require("../utils/ApiDecorator");

var _config = require("../../config");

var _dec, _dec2, _class, _class2;

var SensoryBlockController = (_dec = (0, _ApiDecorator.Api)({
  tags: 'SensoryBlock'
}), _dec2 = (0, _ApiDecorator.GetMapping)({
  value: "".concat(_config.baseUrl, "/sensoryBlock/getSensoryBlocks")
}), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function SensoryBlockController() {
    (0, _classCallCheck2["default"])(this, SensoryBlockController);
  }

  (0, _createClass2["default"])(SensoryBlockController, null, [{
    key: "getSensoryBlocks",
    value: function () {
      var _getSensoryBlocks = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _SensoryBlockService["default"].getSensoryBlocks();

              case 2:
                ctx.response.body = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getSensoryBlocks(_x) {
        return _getSensoryBlocks.apply(this, arguments);
      }

      return getSensoryBlocks;
    }()
  }]);
  return SensoryBlockController;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class2, "getSensoryBlocks", [_dec2], Object.getOwnPropertyDescriptor(_class2, "getSensoryBlocks"), _class2)), _class2)) || _class);
var _default = SensoryBlockController;
exports["default"] = _default;