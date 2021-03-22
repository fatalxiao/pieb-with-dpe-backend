"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPatients = getPatients;
exports.getFullPatients = getFullPatients;
exports.isPatientExist = isPatientExist;
exports.getPatientById = getPatientById;
exports.createPatient = createPatient;
exports.updatePatient = updatePatient;
exports.createOrUpdatePatient = createOrUpdatePatient;
exports.enablePatient = enablePatient;
exports.disablePatient = disablePatient;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _PatientModel = _interopRequireDefault(require("../model/PatientModel.js"));

var _PatientGroupModel = _interopRequireDefault(require("../model/PatientGroupModel.js"));

/**
 * @file PatientDao.js
 */
// Models

/**
 * 获取用于列表的 Patients 数据
 * @returns {Promise}
 */
function getPatients() {
  return _getPatients.apply(this, arguments);
}
/**
 * 获取完全的 Patients 数据
 * @returns {Promise}
 */


function _getPatients() {
  _getPatients = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _PatientModel["default"].findAll({
              order: [['ctime', 'DESC']],
              include: [{
                model: _PatientGroupModel["default"],
                as: 'group',
                where: {
                  id: _sequelize["default"].col('patients.group_id')
                }
              }]
            });

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
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
 * 是否存在 ID 的 Patient 数据
 * @param id
 * @returns {Promise<boolean>}
 */


function _getFullPatients() {
  _getFullPatients = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _PatientModel["default"].findAll({
              order: [['ctime', 'DESC']],
              include: [{
                all: true
              }]
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getFullPatients.apply(this, arguments);
}

function isPatientExist(_x) {
  return _isPatientExist.apply(this, arguments);
}
/**
 * 根据 ID 获取 Patient 数据
 * @param id
 * @returns {Promise}
 */


function _isPatientExist() {
  _isPatientExist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _PatientModel["default"].count({
              where: {
                id: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, id)
              }
            });

          case 2:
            _context3.t0 = _context3.sent;
            return _context3.abrupt("return", _context3.t0 > 0);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _isPatientExist.apply(this, arguments);
}

function getPatientById(_x2) {
  return _getPatientById.apply(this, arguments);
}
/**
 * 创建一条 Patient 数据
 * @param data
 * @returns {Promise<void>}
 */


function _getPatientById() {
  _getPatientById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _PatientModel["default"].findOne({
              where: {
                id: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, id)
              },
              include: [{
                model: _PatientGroupModel["default"],
                as: 'group',
                where: {
                  id: _sequelize["default"].col('patients.group_id')
                }
              }]
            });

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getPatientById.apply(this, arguments);
}

function createPatient(_x3) {
  return _createPatient.apply(this, arguments);
}
/**
 * 更新一条 Patient 数据
 * @param data
 * @returns {Promise}
 */


function _createPatient() {
  _createPatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(data) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", _PatientModel["default"].create(data));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _createPatient.apply(this, arguments);
}

function updatePatient(_x4) {
  return _updatePatient.apply(this, arguments);
}
/**
 * 创建或更新一条 Patient 数据
 * @param data
 * @returns {Promise}
 */


function _updatePatient() {
  _updatePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(data) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _PatientModel["default"].update(data, {
              where: {
                id: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, data.id)
              }
            });

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updatePatient.apply(this, arguments);
}

function createOrUpdatePatient(_x5) {
  return _createOrUpdatePatient.apply(this, arguments);
}
/**
 * 启用某个 ID 的 Patient
 * @param id
 * @returns {Promise}
 */


function _createOrUpdatePatient() {
  _createOrUpdatePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(data) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return isPatientExist(data.id);

          case 2:
            if (!_context7.sent) {
              _context7.next = 6;
              break;
            }

            return _context7.abrupt("return", updatePatient(data));

          case 6:
            return _context7.abrupt("return", createPatient(data));

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _createOrUpdatePatient.apply(this, arguments);
}

function enablePatient(_x6) {
  return _enablePatient.apply(this, arguments);
}
/**
 * 禁用某个 ID 的 Patient
 * @param id
 * @returns {Promise}
 */


function _enablePatient() {
  _enablePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(id) {
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _PatientModel["default"].update({
              status: 1
            }, {
              where: {
                id: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, id)
              }
            });

          case 2:
            return _context8.abrupt("return", _context8.sent);

          case 3:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _enablePatient.apply(this, arguments);
}

function disablePatient(_x7) {
  return _disablePatient.apply(this, arguments);
}

function _disablePatient() {
  _disablePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(id) {
    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return _PatientModel["default"].update({
              status: 0
            }, {
              where: {
                id: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, id)
              }
            });

          case 2:
            return _context9.abrupt("return", _context9.sent);

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _disablePatient.apply(this, arguments);
}

var _default = {
  getPatients: getPatients,
  getFullPatients: getFullPatients,
  isPatientExist: isPatientExist,
  getPatientById: getPatientById,
  createPatient: createPatient,
  updatePatient: updatePatient,
  createOrUpdatePatient: createOrUpdatePatient,
  enablePatient: enablePatient,
  disablePatient: disablePatient
};
exports["default"] = _default;