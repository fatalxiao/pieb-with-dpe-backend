"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getPatientGroups = getPatientGroups;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _PatientGroupModel = _interopRequireDefault(require("../model/PatientGroupModel.js"));
/**
 * @file PatientGroupDao.js
 */
// Models
/**
 * 获取所有的 patient groups 数据
 * @returns {Promise}
 */
function getPatientGroups() {
  return _getPatientGroups.apply(this, arguments);
}
function _getPatientGroups() {
  _getPatientGroups = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _PatientGroupModel["default"].findAll();
          case 2:
            return _context.abrupt("return", _context.sent);
          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPatientGroups.apply(this, arguments);
}
var _default = {
  getPatientGroups: getPatientGroups
};
exports["default"] = _default;