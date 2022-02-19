"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getSensoryBlocks = getSensoryBlocks;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _SensoryBlockModel = _interopRequireDefault(require("../model/SensoryBlockModel.js"));

/**
 * @file SensoryBlockDao.js
 */
// Models

/**
 * 获取所有 Sensory Blocks 数据
 * @returns {Promise}
 */
function getSensoryBlocks() {
  return _getSensoryBlocks.apply(this, arguments);
}

function _getSensoryBlocks() {
  _getSensoryBlocks = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _SensoryBlockModel["default"].findAll();

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getSensoryBlocks.apply(this, arguments);
}

var _default = {
  getSensoryBlocks: getSensoryBlocks
};
exports["default"] = _default;