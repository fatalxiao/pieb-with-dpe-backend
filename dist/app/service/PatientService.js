"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPatients = getPatients;
exports.getFullPatients = getFullPatients;
exports.getPatientById = getPatientById;
exports.createPatient = createPatient;
exports.updatePatient = updatePatient;
exports.createOrUpdatePatient = createOrUpdatePatient;
exports.enablePatient = enablePatient;
exports.disablePatient = disablePatient;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _PatientDao = _interopRequireDefault(require("../dao/PatientDao.js"));

var _Response = require("../utils/Response.js");

/**
 * @file PatientService.js
 */
// Daos
// Vendors

/**
 * 获取用于列表的 Patients 数据
 * @returns {Promise<string>}
 */
function getPatients() {
  return _getPatients.apply(this, arguments);
}
/**
 * 获取完全的 Patients 数据
 * @returns {Promise<string>}
 */


function _getPatients() {
  _getPatients = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = _Response.buildSuccess;
            _context.next = 3;
            return _PatientDao["default"].getPatients();

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
  return _getPatients.apply(this, arguments);
}

function getFullPatients() {
  return _getFullPatients.apply(this, arguments);
}
/**
 * 根据 ID 获取 Patient 数据
 * @param id
 * @returns {Promise<string>}
 */


function _getFullPatients() {
  _getFullPatients = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = _Response.buildSuccess;
            _context2.next = 3;
            return _PatientDao["default"].getFullPatients();

          case 3:
            _context2.t1 = _context2.sent;
            return _context2.abrupt("return", (0, _context2.t0)(_context2.t1));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getFullPatients.apply(this, arguments);
}

function getPatientById(_x) {
  return _getPatientById.apply(this, arguments);
}
/**
 * 创建一条 Patient 数据
 * @param data
 * @returns {Promise<string>}
 */


function _getPatientById() {
  _getPatientById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = _Response.buildSuccess;
            _context3.next = 3;
            return _PatientDao["default"].getPatientById(id);

          case 3:
            _context3.t1 = _context3.sent;
            return _context3.abrupt("return", (0, _context3.t0)(_context3.t1));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getPatientById.apply(this, arguments);
}

function createPatient(_x2) {
  return _createPatient.apply(this, arguments);
}
/**
 * 更新一条 Patient 数据
 * @param data
 * @returns {Promise<string>}
 */


function _createPatient() {
  _createPatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(data) {
    var result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _PatientDao["default"].isPatientExist(data.id);

          case 2:
            if (!_context4.sent) {
              _context4.next = 4;
              break;
            }

            return _context4.abrupt("return", (0, _Response.buildError)("Patient ID ".concat(data.id, " is exist.")));

          case 4:
            _context4.prev = 4;
            _context4.next = 7;
            return _PatientDao["default"].createPatient(data);

          case 7:
            result = _context4.sent;
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](4);
            return _context4.abrupt("return", (0, _Response.buildError)('Create Patient failure.'));

          case 13:
            return _context4.abrupt("return", (0, _Response.buildSuccess)(result));

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[4, 10]]);
  }));
  return _createPatient.apply(this, arguments);
}

function updatePatient(_x3) {
  return _updatePatient.apply(this, arguments);
}
/**
 * 创建或更新一条 Patient 数据
 * @param data
 * @returns {Promise<string>}
 */


function _updatePatient() {
  _updatePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(data) {
    var result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _PatientDao["default"].isPatientExist(data.id);

          case 2:
            if (_context5.sent) {
              _context5.next = 4;
              break;
            }

            return _context5.abrupt("return", (0, _Response.buildError)("Patient ID ".concat(data.id, " is not exist.")));

          case 4:
            _context5.prev = 4;
            _context5.next = 7;
            return _PatientDao["default"].updatePatient(data);

          case 7:
            result = _context5.sent;
            _context5.next = 13;
            break;

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](4);
            return _context5.abrupt("return", (0, _Response.buildError)('Update Patient failure.'));

          case 13:
            return _context5.abrupt("return", (0, _Response.buildSuccess)(result));

          case 14:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[4, 10]]);
  }));
  return _updatePatient.apply(this, arguments);
}

function createOrUpdatePatient(_x4) {
  return _createOrUpdatePatient.apply(this, arguments);
}
/**
 * 启用某个 ID 的 Patient
 * @param id
 * @returns {Promise<string>}
 */


function _createOrUpdatePatient() {
  _createOrUpdatePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(data) {
    var result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return _PatientDao["default"].createOrUpdatePatient(data);

          case 3:
            result = _context6.sent;
            _context6.next = 9;
            break;

          case 6:
            _context6.prev = 6;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", (0, _Response.buildError)('Update Patient failure.'));

          case 9:
            return _context6.abrupt("return", (0, _Response.buildSuccess)(result));

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 6]]);
  }));
  return _createOrUpdatePatient.apply(this, arguments);
}

function enablePatient(_x5) {
  return _enablePatient.apply(this, arguments);
}
/**
 * 禁用某个 ID 的 Patient
 * @param id
 * @returns {Promise<string>}
 */


function _enablePatient() {
  _enablePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(id) {
    var result;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _PatientDao["default"].isPatientExist(id);

          case 2:
            if (_context7.sent) {
              _context7.next = 4;
              break;
            }

            return _context7.abrupt("return", (0, _Response.buildError)("Patient ID ".concat(id, " is not exist.")));

          case 4:
            _context7.prev = 4;
            _context7.next = 7;
            return _PatientDao["default"].enablePatient(id);

          case 7:
            result = _context7.sent;
            _context7.next = 13;
            break;

          case 10:
            _context7.prev = 10;
            _context7.t0 = _context7["catch"](4);
            return _context7.abrupt("return", (0, _Response.buildError)('Enable Patient failure.'));

          case 13:
            return _context7.abrupt("return", (0, _Response.buildSuccess)(result));

          case 14:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[4, 10]]);
  }));
  return _enablePatient.apply(this, arguments);
}

function disablePatient(_x6) {
  return _disablePatient.apply(this, arguments);
}

function _disablePatient() {
  _disablePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(id) {
    var result;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _PatientDao["default"].isPatientExist(id);

          case 2:
            if (_context8.sent) {
              _context8.next = 4;
              break;
            }

            return _context8.abrupt("return", (0, _Response.buildError)("Patient ID ".concat(id, " is not exist.")));

          case 4:
            _context8.prev = 4;
            _context8.next = 7;
            return _PatientDao["default"].disablePatient(id);

          case 7:
            result = _context8.sent;
            _context8.next = 13;
            break;

          case 10:
            _context8.prev = 10;
            _context8.t0 = _context8["catch"](4);
            return _context8.abrupt("return", (0, _Response.buildError)('Enable Patient failure.'));

          case 13:
            return _context8.abrupt("return", (0, _Response.buildSuccess)(result));

          case 14:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8, null, [[4, 10]]);
  }));
  return _disablePatient.apply(this, arguments);
}

var _default = {
  getPatients: getPatients,
  getFullPatients: getFullPatients,
  getPatientById: getPatientById,
  createPatient: createPatient,
  updatePatient: updatePatient,
  createOrUpdatePatient: createOrUpdatePatient,
  enablePatient: enablePatient,
  disablePatient: disablePatient
};
exports["default"] = _default;