"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createObservalData = createObservalData;
exports.createOrUpdateObservalData = createOrUpdateObservalData;
exports["default"] = void 0;
exports.getObservalDataByPatientId = getObservalDataByPatientId;
exports.updateObservalData = updateObservalData;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _ObservalDao = _interopRequireDefault(require("../dao/ObservalDao.js"));
var _Response = require("../utils/Response.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * 获取某个 Patient ID 的 Observal 数据
 * @param patientId
 * @returns {Promise<string>}
 */
function getObservalDataByPatientId(_x) {
  return _getObservalDataByPatientId.apply(this, arguments);
}
/**
 * 创建一条 Observal 数据
 *  data: {
 *      patientId: String
 *      observalData: Object
 *  }
 *
 * @param patientId
 * @param data
 * @returns {Promise<*>}
 */
function _getObservalDataByPatientId() {
  _getObservalDataByPatientId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(patientId) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _Response.buildSuccess;
            _context.next = 3;
            return _ObservalDao["default"].getObservalDataByPatientId(patientId);
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
  return _getObservalDataByPatientId.apply(this, arguments);
}
function createObservalData(_x2, _x3) {
  return _createObservalData.apply(this, arguments);
}
/**
 * 更新一条 Observal 数据
 *  data: {
 *      patientId: String
 *      observalData: Object
 *  }
 *
 * @param patientId
 * @param data
 * @returns {Promise<*>}
 */
function _createObservalData() {
  _createObservalData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(patientId, data) {
    var result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _ObservalDao["default"].isObservalDataExist(patientId);
          case 2:
            if (!_context2.sent) {
              _context2.next = 4;
              break;
            }
            return _context2.abrupt("return", (0, _Response.buildError)("Patient ID ".concat(patientId, " Observal Data is exist.")));
          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return _ObservalDao["default"].createObservalData(_objectSpread(_objectSpread({}, data), {}, {
              patientId: patientId
            }));
          case 7:
            result = _context2.sent;
            _context2.next = 13;
            break;
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](4);
            return _context2.abrupt("return", (0, _Response.buildError)('Add Observal Data failure.'));
          case 13:
            return _context2.abrupt("return", (0, _Response.buildSuccess)(result));
          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 10]]);
  }));
  return _createObservalData.apply(this, arguments);
}
function updateObservalData(_x4, _x5) {
  return _updateObservalData.apply(this, arguments);
}
/**
 * 创建或更新一条 Observal 数据
 *  data: {
 *      patientId: String
 *      observalData: Object
 *  }
 *
 * @param patientId
 * @param data
 * @returns {Promise<*>}
 */
function _updateObservalData() {
  _updateObservalData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(patientId, data) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _ObservalDao["default"].isObservalDataExist(patientId);
          case 2:
            if (_context3.sent) {
              _context3.next = 4;
              break;
            }
            return _context3.abrupt("return", (0, _Response.buildError)("Patient ID ".concat(patientId, " Observal Data is not exist.")));
          case 4:
            _context3.prev = 4;
            _context3.next = 7;
            return _ObservalDao["default"].updateObservalData(_objectSpread(_objectSpread({}, data), {}, {
              patientId: patientId
            }));
          case 7:
            result = _context3.sent;
            _context3.next = 13;
            break;
          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](4);
            return _context3.abrupt("return", (0, _Response.buildError)('Update Observal Data failure.'));
          case 13:
            return _context3.abrupt("return", (0, _Response.buildSuccess)(result));
          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[4, 10]]);
  }));
  return _updateObservalData.apply(this, arguments);
}
function createOrUpdateObservalData(_x6, _x7) {
  return _createOrUpdateObservalData.apply(this, arguments);
}
function _createOrUpdateObservalData() {
  _createOrUpdateObservalData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(patientId, data) {
    var result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _ObservalDao["default"].createOrUpdateObservalData(_objectSpread(_objectSpread({}, data), {}, {
              patientId: patientId
            }));
          case 3:
            result = _context4.sent;
            _context4.next = 9;
            break;
          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", (0, _Response.buildError)('Update Observal Data failure.'));
          case 9:
            return _context4.abrupt("return", (0, _Response.buildSuccess)(result));
          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));
  return _createOrUpdateObservalData.apply(this, arguments);
}
var _default = {
  getObservalDataByPatientId: getObservalDataByPatientId,
  createObservalData: createObservalData,
  updateObservalData: updateObservalData,
  createOrUpdateObservalData: createOrUpdateObservalData
};
exports["default"] = _default;