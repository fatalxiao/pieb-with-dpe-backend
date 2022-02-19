"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getEPPlacementPoints = getEPPlacementPoints;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _EPPlacementPointModel = _interopRequireDefault(require("../model/EPPlacementPointModel.js"));

/**
 * @file EPPlacementPointDao.js
 */
// Models

/**
 * 获取所有的 EP Placement Points 数据
 * @returns {Promise}
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
            _context.next = 2;
            return _EPPlacementPointModel["default"].findAll();

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
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