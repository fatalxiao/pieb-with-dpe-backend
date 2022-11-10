"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getObservalEndPoints = getObservalEndPoints;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _ObservalEndPointModel = _interopRequireDefault(require("../model/ObservalEndPointModel.js"));
/**
 * @file ObservalEndPointDao.js
 */
// Models
/**
 * 获取所有的 Observal End Points 数据
 * @returns {Promise}
 */
function getObservalEndPoints() {
  return _getObservalEndPoints.apply(this, arguments);
}
function _getObservalEndPoints() {
  _getObservalEndPoints = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _ObservalEndPointModel["default"].findAll();
          case 2:
            return _context.abrupt("return", _context.sent);
          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getObservalEndPoints.apply(this, arguments);
}
var _default = {
  getObservalEndPoints: getObservalEndPoints
};
exports["default"] = _default;