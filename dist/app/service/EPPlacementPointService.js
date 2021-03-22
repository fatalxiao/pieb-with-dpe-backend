"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEPPlacementPoints = getEPPlacementPoints;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _EPPlacementPointDao = _interopRequireDefault(require("../dao/EPPlacementPointDao.js"));

var _Response = require("../utils/Response.js");

/**
 * @file EPPlacementPointService.js
 */
// Daos
// Vendors

/**
 * 获取所有的 EP Placement Points 数据
 * @returns {Promise<string>}
 */
function getEPPlacementPoints() {
  return _getEPPlacementPoints.apply(this, arguments);
}

function _getEPPlacementPoints() {
  _getEPPlacementPoints = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _Response.buildSuccess;
            _context.next = 3;
            return _EPPlacementPointDao["default"].getEPPlacementPoints();

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
  return _getEPPlacementPoints.apply(this, arguments);
}

var _default = {
  getEPPlacementPoints: getEPPlacementPoints
};
exports["default"] = _default;