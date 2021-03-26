"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPiebOptimalIntervalDataData = getPiebOptimalIntervalDataData;
exports.getExportData = getExportData;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _PatientDao = require("../dao/PatientDao.js");

var _AnalgesiaCalculation = require("../utils/AnalgesiaCalculation.js");

var _ExportFormat = require("../utils/ExportFormat.js");

/**
 * @file ExportService.js
 */
// Daos
// Vendors

/**
 * 获取导出的 DPE 部分的数据
 * @param data
 * @returns {*}
 */
function getPiebOptimalIntervalDataData(_x) {
  return _getPiebOptimalIntervalDataData.apply(this, arguments);
}
/**
 * 获取导出的所有数据
 * @param data
 * @returns {*}
 */


function _getPiebOptimalIntervalDataData() {
  _getPiebOptimalIntervalDataData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data) {
    var header, excelData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = data;

            if (_context.t0) {
              _context.next = 5;
              break;
            }

            _context.next = 4;
            return (0, _PatientDao.getFullPatients)();

          case 4:
            _context.t0 = _context.sent;

          case 5:
            data = _context.t0;
            header = [{
              name: '组别',
              key: 'groupName'
            }, {
              name: '住院号',
              key: 'id'
            }, {
              name: '姓名',
              key: 'name'
            }, {
              name: '年龄',
              key: 'age'
            }, {
              name: '身高',
              key: 'height'
            }, {
              name: '体重',
              key: 'weight'
            }, {
              name: 'BMI',
              key: 'bmi'
            }, {
              name: '孕周',
              key: 'gestationalDays'
            }, {
              name: '基础收缩压',
              key: 'systolicBloodPressure'
            }, {
              name: '基础舒张压',
              key: 'diastolicBloodPressure'
            }, {
              name: '基础心率',
              key: 'heartRate'
            }, {
              name: '基础氧饱和度',
              key: 'pulseOxygenSaturation'
            }, {
              name: '基础胎心率',
              key: 'fetalHeartRate'
            }, {
              name: '镇痛前宫口大小',
              key: 'cervicalDilationAtTimeOfEA'
            }, {
              name: '镇痛前VAS评分',
              key: 'initialVasScore'
            }, {
              name: '镇痛前缩宫素使用',
              key: 'hasOxytocinAtTimeOfEA'
            }, {
              name: '是否引产',
              key: 'hasInduction'
            }, {
              name: '穿刺位置',
              key: 'epPlacementPoint'
            }, {
              name: '镇痛开始时间',
              key: 'initialTime'
            }, {
              name: '20min VAS评分',
              key: 'vasIn20'
            }, {
              name: '左侧最高头端阻滞平面',
              key: 'maxThoracicSensoryBlockLeft'
            }, {
              name: '右侧最高头端阻滞平面',
              key: 'maxThoracicSensoryBlockRight'
            }, {
              name: '左侧尾端最低阻滞平面',
              key: 'minSacralSensoryBlockLeft'
            }, {
              name: '右侧尾端最低阻滞平面',
              key: 'minSacralSensoryBlockRight'
            }, {
              name: 'Bromage',
              key: 'bromageScore'
            }, {
              name: '观察终点',
              key: 'observalEndPoint'
            }, {
              name: '宫口开全时间',
              key: 'cervixFullyDilatedTime'
            }, {
              name: '镇痛后6h宫口大小',
              key: 'cervixDilatation'
            }, {
              name: '是否使用PCA',
              key: 'hasPca'
            }, {
              name: '首次PCA时间',
              key: 'firstPcaTime'
            }, {
              name: '首次手推负荷时间',
              key: 'firstManualBolusTime'
            }, {
              name: '是否转剖宫产',
              key: 'hasCaesareanSection'
            }, {
              name: '是否侧切',
              key: 'hasLateralEpisiotomy'
            }, {
              name: '是否器械助产',
              key: 'hasInstrumental'
            }, {
              name: '是否低血压',
              key: 'hasHypotension'
            }, {
              name: '备注',
              key: 'desc'
            }], excelData = data.filter(function (item) {
              return item === null || item === void 0 ? void 0 : item.status;
            }).map(function (item) {
              if (!item) {
                return null;
              }

              var id = item.id,
                  name = item.name,
                  group = item.group,
                  age = item.age,
                  height = item.height,
                  weight = item.weight,
                  gestationalDays = item.gestationalDays,
                  initialVasScore = item.initialVasScore,
                  cervicalDilationAtTimeOfEA = item.cervicalDilationAtTimeOfEA,
                  systolicBloodPressure = item.systolicBloodPressure,
                  diastolicBloodPressure = item.diastolicBloodPressure,
                  heartRate = item.heartRate,
                  pulseOxygenSaturation = item.pulseOxygenSaturation,
                  fetalHeartRate = item.fetalHeartRate,
                  hasOxytocinAtTimeOfEA = item.hasOxytocinAtTimeOfEA,
                  hasInduction = item.hasInduction,
                  description = item.description,
                  analgesia = item.analgesia,
                  observal = item.observal,
                  result = {
                groupName: (group === null || group === void 0 ? void 0 : group.name) || '',
                id: id,
                name: name,
                age: (0, _ExportFormat.formatNumber)(age),
                height: (0, _ExportFormat.formatNumber)(height),
                weight: (0, _ExportFormat.formatNumber)(weight),
                bmi: weight && height ? (weight / Math.pow(height / 100, 2)).toFixed(2) : null,
                gestationalDays: (0, _ExportFormat.formatNumber)(gestationalDays),
                systolicBloodPressure: (0, _ExportFormat.formatNumber)(systolicBloodPressure),
                diastolicBloodPressure: (0, _ExportFormat.formatNumber)(diastolicBloodPressure),
                heartRate: (0, _ExportFormat.formatNumber)(heartRate),
                pulseOxygenSaturation: (0, _ExportFormat.formatNumber)(pulseOxygenSaturation),
                fetalHeartRate: (0, _ExportFormat.formatNumber)(fetalHeartRate),
                cervicalDilationAtTimeOfEA: (0, _ExportFormat.formatNumber)(cervicalDilationAtTimeOfEA),
                initialVasScore: (0, _ExportFormat.formatNumber)(initialVasScore * 10),
                hasOxytocinAtTimeOfEA: (0, _ExportFormat.formatBoolean)(hasOxytocinAtTimeOfEA),
                hasInduction: (0, _ExportFormat.formatBoolean)(hasInduction),
                desc: description ? [description] : []
              };

              if (analgesia) {
                var analgesiaData = (0, _AnalgesiaCalculation.fullFillAnalgesiaData)(analgesia);
                result.vasIn20 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 20));
                result.maxThoracicSensoryBlockLeft = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getMaxThoracicSensoryBlock)(analgesiaData, _AnalgesiaCalculation.Position.LEFT));
                result.maxThoracicSensoryBlockRight = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getMaxThoracicSensoryBlock)(analgesiaData, _AnalgesiaCalculation.Position.RIGHT));
                result.minSacralSensoryBlockLeft = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getMinSacralSensoryBlock)(analgesiaData, _AnalgesiaCalculation.Position.LEFT));
                result.minSacralSensoryBlockRight = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getMinSacralSensoryBlock)(analgesiaData, _AnalgesiaCalculation.Position.RIGHT));
                result.bromageScore = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getMaxBromageScore)(analgesiaData));
              }

              if (observal) {
                var epPlacementPoint = observal.epPlacementPoint,
                    initialTime = observal.initialTime,
                    observalEndPoint = observal.observalEndPoint,
                    cervixFullyDilatedTime = observal.cervixFullyDilatedTime,
                    cervixDilatation = observal.cervixDilatation,
                    pcaCount = observal.pcaCount,
                    firstPcaTime = observal.firstPcaTime,
                    firstManualBolusTime = observal.firstManualBolusTime,
                    hasCaesareanSection = observal.hasCaesareanSection,
                    hasLateralEpisiotomy = observal.hasLateralEpisiotomy,
                    hasInstrumental = observal.hasInstrumental,
                    hasHypotension = observal.hasHypotension,
                    _description = observal.description;
                result.epPlacementPoint = (0, _ExportFormat.formatString)(epPlacementPoint);
                result.initialTime = (0, _ExportFormat.formatString)(initialTime);
                result.observalEndPoint = (0, _ExportFormat.formatString)(observalEndPoint === null || observalEndPoint === void 0 ? void 0 : observalEndPoint.name);
                result.cervixFullyDilatedTime = (0, _ExportFormat.formatString)(cervixFullyDilatedTime);
                result.cervixDilatation = (0, _ExportFormat.formatString)(cervixDilatation);
                result.hasPca = (0, _ExportFormat.formatBoolean)(+pcaCount > 0);
                result.firstPcaTime = (0, _ExportFormat.formatString)(firstPcaTime);
                result.firstManualBolusTime = (0, _ExportFormat.formatString)(firstManualBolusTime);
                result.hasCaesareanSection = (0, _ExportFormat.formatBoolean)(hasCaesareanSection);
                result.hasLateralEpisiotomy = (0, _ExportFormat.formatBoolean)(hasLateralEpisiotomy);
                result.hasInstrumental = (0, _ExportFormat.formatBoolean)(hasInstrumental);
                result.hasHypotension = (0, _ExportFormat.formatBoolean)(hasHypotension);
                _description && result.desc.push(_description);
              }

              result.desc = result.desc.join('，');
              return header.map(function (item) {
                return result[item === null || item === void 0 ? void 0 : item.key] || null;
              });
            });
            excelData.unshift(header.map(function (item) {
              return item === null || item === void 0 ? void 0 : item.name;
            }));
            return _context.abrupt("return", excelData);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPiebOptimalIntervalDataData.apply(this, arguments);
}

function getExportData(_x2) {
  return _getExportData.apply(this, arguments);
}

function _getExportData() {
  _getExportData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = data;

            if (_context2.t0) {
              _context2.next = 5;
              break;
            }

            _context2.next = 4;
            return (0, _PatientDao.getFullPatients)();

          case 4:
            _context2.t0 = _context2.sent;

          case 5:
            data = _context2.t0;
            _context2.next = 8;
            return getPiebOptimalIntervalDataData(data);

          case 8:
            _context2.t1 = _context2.sent;
            return _context2.abrupt("return", {
              piebOptimalIntervalData: _context2.t1
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getExportData.apply(this, arguments);
}

var _default = {
  getExportData: getExportData
};
exports["default"] = _default;