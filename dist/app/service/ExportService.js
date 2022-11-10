"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getExportData = getExportData;
exports.getPiebOptimalIntervalDataData = getPiebOptimalIntervalDataData;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _PatientDao = require("../dao/PatientDao.js");
var _SensoryBlockDao = require("../dao/SensoryBlockDao.js");
var _AnalgesiaCalculation = require("../utils/AnalgesiaCalculation.js");
var _ExportFormat = require("../utils/ExportFormat.js");
var _Time = require("../utils/Time.js");
/**
 * @file ExportService.js
 */
// Daos
// Vendors
/**
 * 获取导出的 DPE 部分的数据
 * @param data
 * @param sensoryBlocks
 * @returns {*}
 */
function getPiebOptimalIntervalDataData(_x, _x2) {
  return _getPiebOptimalIntervalDataData.apply(this, arguments);
}
/**
 * 获取导出的所有数据
 * @param data
 * @param sensoryBlocks
 * @returns {*}
 */
function _getPiebOptimalIntervalDataData() {
  _getPiebOptimalIntervalDataData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data, sensoryBlocks) {
    var header, excelData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
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
              name: '身高（cm）',
              key: 'height'
            }, {
              name: '体重（kg）',
              key: 'weight'
            }, {
              name: 'BMI',
              key: 'bmi'
            }, {
              name: '孕周（天）',
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
              name: '0min VAS评分',
              key: 'vasIn0'
            }, {
              name: '20min VAS评分',
              key: 'vasIn20'
            }, {
              name: '1h VAS评分',
              key: 'vasIn60'
            }, {
              name: '2h VAS评分',
              key: 'vasIn120'
            }, {
              name: '3h VAS评分',
              key: 'vasIn180'
            }, {
              name: '4h VAS评分',
              key: 'vasIn240'
            }, {
              name: '5h VAS评分',
              key: 'vasIn300'
            }, {
              name: '6h VAS评分',
              key: 'vasIn360'
            }, {
              name: '左侧最高头端阻滞平面',
              key: 'maxThoracicSensoryBlockLeft'
            }, {
              name: '右侧最高头端阻滞平面',
              key: 'maxThoracicSensoryBlockRight'
            }, {
              name: '左侧最高头端阻滞平面（从1小时起）',
              key: 'maxThoracicSensoryBlockLeftFrom60'
            }, {
              name: '右侧最高头端阻滞平面（从1小时起）',
              key: 'maxThoracicSensoryBlockRightFrom60'
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
              name: '镇痛开始到首次PCA之间的时长（分钟）',
              key: 'durationOfFirstPcaTime'
            }, {
              name: '首次手推负荷时间',
              key: 'firstManualBolusTime'
            }, {
              name: '镇痛开始到首次手推负荷之间的时长（分钟）',
              key: 'durationOfFirstManualBolusTime'
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
            }];
            excelData = data.filter(function (item) {
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
                  // 组别
                  groupName: (group === null || group === void 0 ? void 0 : group.name) || '',
                  // 住院号
                  id: id,
                  // 姓名
                  name: name,
                  // 年龄
                  age: (0, _ExportFormat.formatNumber)(age),
                  // 身高（cm）
                  height: (0, _ExportFormat.formatNumber)(height),
                  // 体重（kg）
                  weight: (0, _ExportFormat.formatNumber)(weight),
                  // BMI
                  bmi: weight && height ? (weight / Math.pow(height / 100, 2)).toFixed(2) : null,
                  // 孕周（天）
                  gestationalDays: (0, _ExportFormat.formatNumber)(gestationalDays),
                  // 基础收缩压
                  systolicBloodPressure: (0, _ExportFormat.formatNumber)(systolicBloodPressure),
                  // 基础舒张压
                  diastolicBloodPressure: (0, _ExportFormat.formatNumber)(diastolicBloodPressure),
                  // 基础心率
                  eartRate: (0, _ExportFormat.formatNumber)(heartRate),
                  // 基础氧饱和度
                  pulseOxygenSaturation: (0, _ExportFormat.formatNumber)(pulseOxygenSaturation),
                  // 基础胎心率
                  fetalHeartRate: (0, _ExportFormat.formatNumber)(fetalHeartRate),
                  // 镇痛前宫口大小
                  cervicalDilationAtTimeOfEA: (0, _ExportFormat.formatNumber)(cervicalDilationAtTimeOfEA),
                  // 镇痛前VAS评分
                  initialVasScore: (0, _ExportFormat.formatNumber)(initialVasScore * 10),
                  // 镇痛前缩宫素使用
                  hasOxytocinAtTimeOfEA: (0, _ExportFormat.formatBoolean)(hasOxytocinAtTimeOfEA),
                  // 是否引产
                  hasInduction: (0, _ExportFormat.formatBoolean)(hasInduction),
                  // 备注
                  desc: description ? [description] : []
                };
              if (analgesia) {
                var _getThoracicSensoryBl, _getThoracicSensoryBl2;
                var analgesiaData = (0, _AnalgesiaCalculation.fullFillAnalgesiaData)(analgesia);

                // 0min VAS评分
                result.vasIn0 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 0));

                // 20min VAS评分
                result.vasIn20 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 20));

                // 1h VAS评分
                result.vasIn60 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 60));

                // 2h VAS评分
                result.vasIn120 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 120));

                // 3h VAS评分
                result.vasIn180 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 180));

                // 4h VAS评分
                result.vasIn240 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 240));

                // 5h VAS评分
                result.vasIn300 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 300));

                // 6h VAS评分
                result.vasIn360 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 360));

                // 左侧最高头端阻滞平面
                result.maxThoracicSensoryBlockLeft = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getMaxThoracicSensoryBlock)(analgesiaData, _AnalgesiaCalculation.Position.LEFT));

                // 右侧最高头端阻滞平面
                result.maxThoracicSensoryBlockRight = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getMaxThoracicSensoryBlock)(analgesiaData, _AnalgesiaCalculation.Position.RIGHT));

                // 左侧最高头端阻滞平面（从1小时起）
                result.maxThoracicSensoryBlockLeftFrom60 = (0, _ExportFormat.formatString)((_getThoracicSensoryBl = (0, _AnalgesiaCalculation.getThoracicSensoryBlockByValue)(sensoryBlocks, (0, _AnalgesiaCalculation.getMaxThoracicSensoryBlock)(analgesiaData, _AnalgesiaCalculation.Position.LEFT, 60))) === null || _getThoracicSensoryBl === void 0 ? void 0 : _getThoracicSensoryBl.name);

                // 右侧最高头端阻滞平面（从1小时起）
                result.maxThoracicSensoryBlockRightFrom60 = (0, _ExportFormat.formatString)((_getThoracicSensoryBl2 = (0, _AnalgesiaCalculation.getThoracicSensoryBlockByValue)(sensoryBlocks, (0, _AnalgesiaCalculation.getMaxThoracicSensoryBlock)(analgesiaData, _AnalgesiaCalculation.Position.RIGHT, 60))) === null || _getThoracicSensoryBl2 === void 0 ? void 0 : _getThoracicSensoryBl2.name);

                // 左侧尾端最低阻滞平面
                result.minSacralSensoryBlockLeft = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getMinSacralSensoryBlock)(analgesiaData, _AnalgesiaCalculation.Position.LEFT));

                // 右侧尾端最低阻滞平面
                result.minSacralSensoryBlockRight = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getMinSacralSensoryBlock)(analgesiaData, _AnalgesiaCalculation.Position.RIGHT));

                // Bromage
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

                // 穿刺位置
                result.epPlacementPoint = (0, _ExportFormat.formatString)(epPlacementPoint);

                // 镇痛开始时间
                result.initialTime = (0, _ExportFormat.formatString)(initialTime);

                // 观察终点
                result.observalEndPoint = (0, _ExportFormat.formatString)(observalEndPoint === null || observalEndPoint === void 0 ? void 0 : observalEndPoint.name);

                // 宫口开全时间
                result.cervixFullyDilatedTime = (0, _ExportFormat.formatString)(cervixFullyDilatedTime);

                // 镇痛后6h宫口大小
                result.cervixDilatation = (0, _ExportFormat.formatString)(cervixDilatation);

                // 是否使用PCA
                result.hasPca = (0, _ExportFormat.formatBoolean)(+pcaCount > 0);

                // 首次PCA时间
                result.firstPcaTime = (0, _ExportFormat.formatString)(firstPcaTime);

                // 镇痛开始到首次PCA之间的时长（分钟）
                result.durationOfFirstPcaTime = (0, _ExportFormat.formatDuration)((0, _Time.duration)(initialTime, firstPcaTime, 'HH:mm'));

                // 首次手推负荷时间
                result.firstManualBolusTime = (0, _ExportFormat.formatString)(firstManualBolusTime);

                // 镇痛开始到首次手推负荷之间的时长（分钟）
                result.durationOfFirstManualBolusTime = (0, _ExportFormat.formatDuration)((0, _Time.duration)(initialTime, firstManualBolusTime, 'HH:mm'));

                // 是否转剖宫产
                result.hasCaesareanSection = (0, _ExportFormat.formatBoolean)(hasCaesareanSection);

                // 是否侧切
                result.hasLateralEpisiotomy = (0, _ExportFormat.formatBoolean)(hasLateralEpisiotomy);

                // 是否器械助产
                result.hasInstrumental = (0, _ExportFormat.formatBoolean)(hasInstrumental);

                // 是否低血压
                result.hasHypotension = (0, _ExportFormat.formatBoolean)(hasHypotension);

                // 备注
                _description && result.desc.push(_description);
              }

              // 合并备注
              result.desc = result.desc.join('，');
              return header.map(function (item) {
                return result[item === null || item === void 0 ? void 0 : item.key] || null;
              });
            });
            excelData.unshift(header.map(function (item) {
              return item === null || item === void 0 ? void 0 : item.name;
            }));
            return _context.abrupt("return", excelData);
          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPiebOptimalIntervalDataData.apply(this, arguments);
}
function getExportData(_x3, _x4) {
  return _getExportData.apply(this, arguments);
}
function _getExportData() {
  _getExportData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data, sensoryBlocks) {
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
            _context2.t1 = sensoryBlocks;
            if (_context2.t1) {
              _context2.next = 11;
              break;
            }
            _context2.next = 10;
            return (0, _SensoryBlockDao.getSensoryBlocks)();
          case 10:
            _context2.t1 = _context2.sent;
          case 11:
            sensoryBlocks = _context2.t1;
            _context2.next = 14;
            return getPiebOptimalIntervalDataData(data, sensoryBlocks);
          case 14:
            _context2.t2 = _context2.sent;
            return _context2.abrupt("return", {
              piebOptimalIntervalData: _context2.t2
            });
          case 16:
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