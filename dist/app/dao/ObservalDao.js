"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObservalDataByPatientId = getObservalDataByPatientId;
exports.isObservalDataExist = isObservalDataExist;
exports.createObservalData = createObservalData;
exports.updateObservalData = updateObservalData;
exports.createOrUpdateObservalData = createOrUpdateObservalData;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _ObservalModel = _interopRequireDefault(require("../model/ObservalModel.js"));

/**
 * @file ObservalDao.js
 */
// Models

/**
 * 获取某个 patient ID 的 Observal 数据
 * @param patientId
 * @returns {Promise}
 */
function getObservalDataByPatientId(_x) {
  return _getObservalDataByPatientId.apply(this, arguments);
}
/**
 * 是否存在某个 patient ID 的 Observal 数据
 * @param patientId
 * @returns {Promise<boolean>}
 */


function _getObservalDataByPatientId() {
  _getObservalDataByPatientId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(patientId) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _ObservalModel["default"].findOne({
              where: {
                patientId: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, patientId)
              }
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
  return _getObservalDataByPatientId.apply(this, arguments);
}

function isObservalDataExist(_x2) {
  return _isObservalDataExist.apply(this, arguments);
}
/**
 * 创建一条 Observal 数据
 * @param data
 * @returns {Promise<void>}
 */


function _isObservalDataExist() {
  _isObservalDataExist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(patientId) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _ObservalModel["default"].count({
              where: {
                patientId: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, patientId)
              }
            });

          case 2:
            _context2.t0 = _context2.sent;
            return _context2.abrupt("return", _context2.t0 > 0);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _isObservalDataExist.apply(this, arguments);
}

function createObservalData(_x3) {
  return _createObservalData.apply(this, arguments);
}
/**
 * 更新一条 Observal 数据
 * @param data
 * @returns {Promise}
 */


function _createObservalData() {
  _createObservalData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _ObservalModel["default"].create(data));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createObservalData.apply(this, arguments);
}

function updateObservalData(_x4) {
  return _updateObservalData.apply(this, arguments);
}
/**
 * 创建或更新一条 Observal 数据
 * @param data
 * @returns {Promise}
 */


function _updateObservalData() {
  _updateObservalData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(data) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _ObservalModel["default"].update(data, {
              where: {
                patientId: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, data.patientId)
              }
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
  return _updateObservalData.apply(this, arguments);
}

function createOrUpdateObservalData(_x5) {
  return _createOrUpdateObservalData.apply(this, arguments);
}

function _createOrUpdateObservalData() {
  _createOrUpdateObservalData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(data) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return isObservalDataExist(data.patientId);

          case 2:
            if (!_context5.sent) {
              _context5.next = 6;
              break;
            }

            return _context5.abrupt("return", updateObservalData(data));

          case 6:
            return _context5.abrupt("return", createObservalData(data));

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _createOrUpdateObservalData.apply(this, arguments);
}

var _default = {
  getObservalDataByPatientId: getObservalDataByPatientId,
  isObservalDataExist: isObservalDataExist,
  createObservalData: createObservalData,
  updateObservalData: updateObservalData,
  createOrUpdateObservalData: createOrUpdateObservalData
};
exports["default"] = _default;