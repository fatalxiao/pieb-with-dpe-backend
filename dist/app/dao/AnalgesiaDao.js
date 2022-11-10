"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnalgesiaData = createAnalgesiaData;
exports.createOrUpdateAnalgesiaData = createOrUpdateAnalgesiaData;
exports["default"] = void 0;
exports.getAnalgesiaDataByPatientId = getAnalgesiaDataByPatientId;
exports.isAnalgesiaDataExist = isAnalgesiaDataExist;
exports.updateAnalgesiaData = updateAnalgesiaData;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _sequelize = _interopRequireDefault(require("sequelize"));
var _AnalgesiaModel = _interopRequireDefault(require("../model/AnalgesiaModel"));
var _SensoryBlockModel = _interopRequireDefault(require("../model/SensoryBlockModel"));
/**
 * @file AnalgesiaDao.js
 */
// Models
/**
 * 根据 patient ID 获取 Analgesia 数据
 * @param patientId
 * @returns {Promise}
 */
function getAnalgesiaDataByPatientId(_x) {
  return _getAnalgesiaDataByPatientId.apply(this, arguments);
}
/**
 * 是否存在 patient ID 的数据
 * @param patientId
 * @param timePoint
 * @returns {Promise<boolean>}
 */
function _getAnalgesiaDataByPatientId() {
  _getAnalgesiaDataByPatientId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(patientId) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _AnalgesiaModel["default"].findAll({
              where: {
                patientId: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, patientId)
              },
              include: [{
                model: _SensoryBlockModel["default"],
                as: 'thoracicSensoryBlockLeft',
                where: {
                  type: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, 1)
                },
                required: false
              }, {
                model: _SensoryBlockModel["default"],
                as: 'thoracicSensoryBlockRight',
                where: {
                  type: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, 1)
                },
                required: false
              }, {
                model: _SensoryBlockModel["default"],
                as: 'sacralSensoryBlockLeft',
                where: {
                  type: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, 2)
                },
                required: false
              }, {
                model: _SensoryBlockModel["default"],
                as: 'sacralSensoryBlockRight',
                where: {
                  type: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, 2)
                },
                required: false
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
  return _getAnalgesiaDataByPatientId.apply(this, arguments);
}
function isAnalgesiaDataExist(_x2, _x3) {
  return _isAnalgesiaDataExist.apply(this, arguments);
}
/**
 * 创建一条 Analgesia 数据
 * @param data
 * @returns {Promise<data>}
 */
function _isAnalgesiaDataExist() {
  _isAnalgesiaDataExist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(patientId, timePoint) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _AnalgesiaModel["default"].count({
              where: {
                patientId: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, patientId),
                timePoint: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, timePoint)
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
  return _isAnalgesiaDataExist.apply(this, arguments);
}
function createAnalgesiaData(_x4) {
  return _createAnalgesiaData.apply(this, arguments);
}
/**
 * 更新一条 Analgesia 数据
 * @param data
 * @returns {Promise}
 */
function _createAnalgesiaData() {
  _createAnalgesiaData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", _AnalgesiaModel["default"].create(data));
          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _createAnalgesiaData.apply(this, arguments);
}
function updateAnalgesiaData(_x5) {
  return _updateAnalgesiaData.apply(this, arguments);
}
/**
 * 更新或创建一条 Analgesia 数据
 * @param data
 * @returns {Promise}
 */
function _updateAnalgesiaData() {
  _updateAnalgesiaData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(data) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _AnalgesiaModel["default"].update(data, {
              where: {
                patientId: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, data.patientId),
                timePoint: (0, _defineProperty2["default"])({}, _sequelize["default"].Op.eq, data.timePoint)
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
  return _updateAnalgesiaData.apply(this, arguments);
}
function createOrUpdateAnalgesiaData(_x6) {
  return _createOrUpdateAnalgesiaData.apply(this, arguments);
}
function _createOrUpdateAnalgesiaData() {
  _createOrUpdateAnalgesiaData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(data) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return isAnalgesiaDataExist(data.patientId, data.timePoint);
          case 2:
            if (!_context5.sent) {
              _context5.next = 6;
              break;
            }
            return _context5.abrupt("return", updateAnalgesiaData(data));
          case 6:
            return _context5.abrupt("return", createAnalgesiaData(data));
          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _createOrUpdateAnalgesiaData.apply(this, arguments);
}
var _default = {
  getAnalgesiaDataByPatientId: getAnalgesiaDataByPatientId,
  isAnalgesiaDataExist: isAnalgesiaDataExist,
  createAnalgesiaData: createAnalgesiaData,
  updateAnalgesiaData: updateAnalgesiaData,
  createOrUpdateAnalgesiaData: createOrUpdateAnalgesiaData
};
exports["default"] = _default;