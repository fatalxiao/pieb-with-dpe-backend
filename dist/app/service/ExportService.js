"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExportDPEData = getExportDPEData;
exports.getExportMeanVAS = getExportMeanVAS;
exports.getExportMeanVASWithContraction = getExportMeanVASWithContraction;
exports.getExportLaterMeanVAS = getExportLaterMeanVAS;
exports.getExportData = getExportData;
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _PatientDao = require("../dao/PatientDao.js");

var _SensoryBlockDao = require("../dao/SensoryBlockDao.js");

var _AnalgesiaCalculation = require("../utils/AnalgesiaCalculation.js");

var _ObservalCalculation = require("../utils/ObservalCalculation.js");

var _ExportFormat = require("../utils/ExportFormat.js");

/**
 * @file ExportService.js
 */
// Daos
// Vendors

/**
 * 获取导出的 DPE 部分的数据
 * @param data
 * @param sensoryBlocks
 * @returns {Promise<(*|null)[][]>}
 */
function getExportDPEData(_x, _x2) {
  return _getExportDPEData.apply(this, arguments);
}
/**
 * 获取导出的平均 VAS 部分的数据
 * @param data
 * @returns {Promise<(*|null)[][]>}
 */


function _getExportDPEData() {
  _getExportDPEData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(data, sensoryBlocks) {
    var header, s1Value, s2Value, t8Value, t10Value, excelData;
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
            _context.t1 = sensoryBlocks;

            if (_context.t1) {
              _context.next = 11;
              break;
            }

            _context.next = 10;
            return (0, _SensoryBlockDao.getSensoryBlocks)();

          case 10:
            _context.t1 = _context.sent;

          case 11:
            sensoryBlocks = _context.t1;
            header = [{
              name: '组别',
              key: 'groupName'
            }, {
              name: '姓名',
              key: 'name'
            }, {
              name: '住院号',
              key: 'id'
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
              name: '镇痛前VAS评分',
              key: 'initialVasScore'
            }, {
              name: '镇痛前宫口大小',
              key: 'cervicalDilationAtTimeOfEA'
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
              name: '镇痛前缩宫素使用',
              key: 'hasOxytocinAtTimeOfEA'
            }, {
              name: '是否引产',
              key: 'hasInduction'
            }, {
              name: '20min内VAS≤1',
              key: 'isVasLessThan1In20'
            }, {
              name: '30min内VAS≤1',
              key: 'isVasLessThan1In30'
            }, {
              name: 'VAS≤1的时间',
              key: 'timePointOfVasLessThan1'
            }, {
              name: '0min时是否达到满意镇痛',
              key: 'isAdequatePainReliefIn0'
            }, {
              name: '2min时是否达到满意镇痛',
              key: 'isAdequatePainReliefIn2'
            }, {
              name: '4min时是否达到满意镇痛',
              key: 'isAdequatePainReliefIn4'
            }, {
              name: '6min时是否达到满意镇痛',
              key: 'isAdequatePainReliefIn6'
            }, {
              name: '8min时是否达到满意镇痛',
              key: 'isAdequatePainReliefIn8'
            }, {
              name: '10min时是否达到满意镇痛',
              key: 'isAdequatePainReliefIn10'
            }, {
              name: '12min时是否达到满意镇痛',
              key: 'isAdequatePainReliefIn12'
            }, {
              name: '14min时是否达到满意镇痛',
              key: 'isAdequatePainReliefIn14'
            }, {
              name: '16min时是否达到满意镇痛',
              key: 'isAdequatePainReliefIn16'
            }, {
              name: '18min时是否达到满意镇痛',
              key: 'isAdequatePainReliefIn18'
            }, {
              name: '20min时是否达到满意镇痛',
              key: 'isAdequatePainReliefIn20'
            }, {
              name: '30min时是否达到满意镇痛',
              key: 'isAdequatePainReliefIn30'
            }, {
              name: '20min内左侧是否达到S1',
              key: 'isS1In20Left'
            }, {
              name: '20min内右侧是否达到S1',
              key: 'isS1In20Right'
            }, {
              name: '20min内是否双侧是否达到S1',
              key: 'isS1In20Both'
            }, {
              name: '20min内左侧是否达到S2',
              key: 'isS2In20Left'
            }, {
              name: '20min内右侧是否达到S2',
              key: 'isS2In20Right'
            }, {
              name: '20min内是否双侧是否达到S2',
              key: 'isS2In20Both'
            }, {
              name: '30min内左侧是否达到S1',
              key: 'isS1In30Left'
            }, {
              name: '30min内右侧是否达到S1',
              key: 'isS1In30Right'
            }, {
              name: '30min内是否双侧是否达到S1',
              key: 'isS1In30Both'
            }, {
              name: '30min内左侧是否达到S2',
              key: 'isS2In30Left'
            }, {
              name: '30min内右侧是否达到S2',
              key: 'isS2In30Right'
            }, {
              name: '30min内是否双侧是否达到S2',
              key: 'isS2In30Both'
            }, {
              name: '2h时VAS评分',
              key: 'vasIn120'
            }, {
              name: '3.5h时VAS评分',
              key: 'vasIn210'
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
              name: '是否单侧阻滞',
              key: 'isUnilateralSensoryBlock'
            }, {
              name: '达到T8时间',
              key: 'timePointOfT8'
            }, {
              name: '到达T10时间',
              key: 'timePointOfT10'
            }, {
              name: '到达S1时间',
              key: 'timePointOfS1'
            }, {
              name: '到达S2时间',
              key: 'timePointOfS2'
            }, {
              name: 'PCA次数',
              key: 'pcaCount'
            }, {
              name: '首次PCA时间',
              key: 'durationOfFirstPcaTime'
            }, {
              name: 'bolus次数',
              key: 'manualBolusCount'
            }, {
              name: '首次bolus时间',
              key: 'durationOfFirstManualBolusTime'
            }, {
              name: '硬膜外导管重置',
              key: 'hasEpiduralCatheterAdjuestment'
            }, {
              name: '硬膜外导管调整',
              key: 'hasEpiduralCatheterReplacement'
            }, {
              name: 'DPE未见脑脊液',
              key: 'isUnabledToPunctureDura'
            }, {
              name: '血性置管',
              key: 'isIVEpiduralCatheterInsertion'
            }, {
              name: '蛛网膜下腔置管',
              key: 'isIntrathecalEpiduralCatheterInsertion'
            }, {
              name: '镇痛时长',
              key: 'durationOfAnalgesia'
            }, {
              name: '局麻药消耗量',
              key: 'anestheticsConsumption'
            }, {
              name: '罗哌卡因总消耗量',
              key: 'ropivacaineConsumption'
            }, {
              name: '舒芬太尼总消耗量',
              key: 'sufentanilConsumption'
            }, {
              name: '第一产程时长',
              key: 'durationOfFirstStageOfLabor'
            }, {
              name: '第二产程时长',
              key: 'durationOfSecondStageOfLabor'
            }, {
              name: '每小时局麻药消耗量',
              key: 'anestheticsConsumptionPerTime'
            }, {
              name: '每小时罗哌卡因总消耗量',
              key: 'ropivacaineConsumptionPerTime'
            }, {
              name: '每小时舒芬太尼总消耗量',
              key: 'sufentanilConsumptionPerTime'
            }, {
              name: '是否胎心下降',
              key: 'isFetalHeartRateDecreased'
            }, {
              name: '是否转剖宫产',
              key: 'hasCaesareanSection'
            }, {
              name: '剖宫产原因',
              key: 'caesareanSectionReason'
            }, {
              name: '是否器械助产',
              key: 'hasInstrumental'
            }, {
              name: '是否侧切',
              key: 'hasLateralEpisiotomy'
            }, {
              name: '侧切时的VAS评分',
              key: 'lateralEpisiotomyVasScore'
            }, {
              name: '是否产前发热',
              key: 'hasPrenatalFever'
            }, {
              name: '产前发热体温',
              key: 'prenatalFeverTemperature'
            }, {
              name: '低血压的发生',
              key: 'hasHypotension'
            }, {
              name: '血管活性药物使用',
              key: 'hasVasoactiveAgent'
            }, {
              name: '恶心',
              key: 'hasNausea'
            }, {
              name: '呕吐',
              key: 'hasVomit'
            }, {
              name: '瘙痒',
              key: 'hasPruritus'
            }, {
              name: '头痛',
              key: 'hasPostduralPunctureHeadache'
            }, {
              name: '背痛',
              key: 'hasBackPain'
            }, {
              name: '感觉异常',
              key: 'hasParesthesia'
            }, {
              name: '镇痛满意度评分',
              key: 'patientSatisfactionScore'
            }, {
              name: '其他不适',
              key: 'otherdiscomfort'
            }, {
              name: '总出血量',
              key: 'bloodLose'
            }, {
              name: '新生儿体重',
              key: 'foetalWeight'
            }, {
              name: '新生儿身高',
              key: 'foetalHeight'
            }, {
              name: '性别',
              key: 'foetalGender'
            }, {
              name: '1minapgar评分',
              key: 'oneMinuteApgarScore'
            }, {
              name: '5minapgar评分',
              key: 'fiveMinuteApgarScore'
            }, {
              name: '是否去儿科观察室',
              key: 'hasNicu'
            }, {
              name: '儿科观察室原因',
              key: 'nicuReason'
            }, {
              name: '脐动脉PH',
              key: 'arterialPh'
            }, {
              name: '脐动脉BE',
              key: 'arterialBe'
            }, {
              name: '脐静脉PH',
              key: 'venousPh'
            }, {
              name: '脐静脉BE',
              key: 'venousBe'
            }, {
              name: '备注',
              key: 'desc'
            }], s1Value = sensoryBlocks.findOne(function (item) {
              return (item === null || item === void 0 ? void 0 : item.type) === 2 && (item === null || item === void 0 ? void 0 : item.name) === 'S1';
            }).value, s2Value = sensoryBlocks.findOne(function (item) {
              return (item === null || item === void 0 ? void 0 : item.type) === 2 && (item === null || item === void 0 ? void 0 : item.name) === 'S2';
            }).value, t8Value = sensoryBlocks.findOne(function (item) {
              return (item === null || item === void 0 ? void 0 : item.type) === 1 && (item === null || item === void 0 ? void 0 : item.name) === 'T8';
            }).value, t10Value = sensoryBlocks.findOne(function (item) {
              return (item === null || item === void 0 ? void 0 : item.type) === 1 && (item === null || item === void 0 ? void 0 : item.name) === 'T10';
            }).value, excelData = data.filter(function (item) {
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
                id: id,
                name: name,
                groupName: (group === null || group === void 0 ? void 0 : group.name) || '',
                age: (0, _ExportFormat.formatNumber)(age),
                height: (0, _ExportFormat.formatNumber)(height),
                weight: (0, _ExportFormat.formatNumber)(weight),
                bmi: weight && height ? (weight / Math.pow(height / 100, 2)).toFixed(2) : null,
                gestationalDays: (0, _ExportFormat.formatNumber)(gestationalDays),
                initialVasScore: (0, _ExportFormat.formatNumber)(initialVasScore * 10),
                cervicalDilationAtTimeOfEA: (0, _ExportFormat.formatNumber)(cervicalDilationAtTimeOfEA),
                systolicBloodPressure: (0, _ExportFormat.formatNumber)(systolicBloodPressure),
                diastolicBloodPressure: (0, _ExportFormat.formatNumber)(diastolicBloodPressure),
                heartRate: (0, _ExportFormat.formatNumber)(heartRate),
                pulseOxygenSaturation: (0, _ExportFormat.formatNumber)(pulseOxygenSaturation),
                fetalHeartRate: (0, _ExportFormat.formatNumber)(fetalHeartRate),
                hasOxytocinAtTimeOfEA: (0, _ExportFormat.formatBoolean)(hasOxytocinAtTimeOfEA),
                hasInduction: (0, _ExportFormat.formatBoolean)(hasInduction),
                desc: description ? [description] : []
              };

              if (analgesia) {
                var analgesiaData = (0, _AnalgesiaCalculation.fullFillAnalgesiaData)(analgesia),
                    isS1In20Left = (0, _AnalgesiaCalculation.isSacralSensoryInTime)(analgesiaData, s1Value, 20, _AnalgesiaCalculation.Position.LEFT),
                    isS1In20Right = (0, _AnalgesiaCalculation.isSacralSensoryInTime)(analgesiaData, s1Value, 20, _AnalgesiaCalculation.Position.RIGHT),
                    isS2In20Left = (0, _AnalgesiaCalculation.isSacralSensoryInTime)(analgesiaData, s2Value, 20, _AnalgesiaCalculation.Position.LEFT),
                    isS2In20Right = (0, _AnalgesiaCalculation.isSacralSensoryInTime)(analgesiaData, s2Value, 20, _AnalgesiaCalculation.Position.RIGHT),
                    isS1In30Left = (0, _AnalgesiaCalculation.isSacralSensoryInTime)(analgesiaData, s1Value, 30, _AnalgesiaCalculation.Position.LEFT),
                    isS1In30Right = (0, _AnalgesiaCalculation.isSacralSensoryInTime)(analgesiaData, s1Value, 30, _AnalgesiaCalculation.Position.RIGHT),
                    isS2In30Left = (0, _AnalgesiaCalculation.isSacralSensoryInTime)(analgesiaData, s2Value, 30, _AnalgesiaCalculation.Position.LEFT),
                    isS2In30Right = (0, _AnalgesiaCalculation.isSacralSensoryInTime)(analgesiaData, s2Value, 30, _AnalgesiaCalculation.Position.RIGHT);
                result.isVasLessThan1In20 = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isVasLessThan1)(analgesiaData, 20));
                result.isVasLessThan1In30 = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isVasLessThan1)(analgesiaData, 30));
                result.timePointOfVasLessThan1 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getTimePointOfVasLessThan1)(analgesiaData));
                result.isAdequatePainReliefIn0 = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isAdequatePainRelief)(analgesiaData, 0));
                result.isAdequatePainReliefIn2 = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isAdequatePainRelief)(analgesiaData, 2));
                result.isAdequatePainReliefIn4 = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isAdequatePainRelief)(analgesiaData, 4));
                result.isAdequatePainReliefIn6 = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isAdequatePainRelief)(analgesiaData, 6));
                result.isAdequatePainReliefIn8 = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isAdequatePainRelief)(analgesiaData, 8));
                result.isAdequatePainReliefIn10 = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isAdequatePainRelief)(analgesiaData, 10));
                result.isAdequatePainReliefIn12 = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isAdequatePainRelief)(analgesiaData, 12));
                result.isAdequatePainReliefIn14 = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isAdequatePainRelief)(analgesiaData, 14));
                result.isAdequatePainReliefIn16 = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isAdequatePainRelief)(analgesiaData, 16));
                result.isAdequatePainReliefIn18 = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isAdequatePainRelief)(analgesiaData, 18));
                result.isAdequatePainReliefIn20 = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isAdequatePainRelief)(analgesiaData, 20));
                result.isAdequatePainReliefIn30 = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isAdequatePainRelief)(analgesiaData, 30));
                result.isS1In20Left = (0, _ExportFormat.formatBoolean)(isS1In20Left);
                result.isS1In20Right = (0, _ExportFormat.formatBoolean)(isS1In20Right);
                result.isS1In20Both = (0, _ExportFormat.formatBoolean)(isS1In20Left && isS1In20Right);
                result.isS2In20Left = (0, _ExportFormat.formatBoolean)(isS2In20Left);
                result.isS2In20Right = (0, _ExportFormat.formatBoolean)(isS2In20Right);
                result.isS2In20Both = (0, _ExportFormat.formatBoolean)(isS2In20Left && isS2In20Right);
                result.isS1In30Left = (0, _ExportFormat.formatBoolean)(isS1In30Left);
                result.isS1In30Right = (0, _ExportFormat.formatBoolean)(isS1In30Right);
                result.isS1In30Both = (0, _ExportFormat.formatBoolean)(isS1In30Left && isS1In30Right);
                result.isS2In30Left = (0, _ExportFormat.formatBoolean)(isS2In30Left);
                result.isS2In30Right = (0, _ExportFormat.formatBoolean)(isS2In30Right);
                result.isS2In30Both = (0, _ExportFormat.formatBoolean)(isS2In30Left && isS2In30Right);
                result.vasIn120 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 120));
                result.vasIn210 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 210));
                result.maxThoracicSensoryBlockLeft = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getMaxThoracicSensoryBlock)(analgesiaData, _AnalgesiaCalculation.Position.LEFT));
                result.maxThoracicSensoryBlockRight = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getMaxThoracicSensoryBlock)(analgesiaData, _AnalgesiaCalculation.Position.RIGHT));
                result.minSacralSensoryBlockLeft = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getMinSacralSensoryBlock)(analgesiaData, _AnalgesiaCalculation.Position.LEFT));
                result.minSacralSensoryBlockRight = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getMinSacralSensoryBlock)(analgesiaData, _AnalgesiaCalculation.Position.RIGHT));
                result.isUnilateralSensoryBlock = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isUnilateralSensoryBlock)(analgesiaData));
                result.timePointOfT8 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getTimePointOfThoracicSensoryBlock)(analgesiaData, t8Value));
                result.timePointOfT10 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getTimePointOfThoracicSensoryBlock)(analgesiaData, t10Value));
                result.timePointOfS1 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getTimePointOfSacralSensoryBlock)(analgesiaData, s1Value));
                result.timePointOfS2 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getTimePointOfSacralSensoryBlock)(analgesiaData, s2Value));
                result.isFetalHeartRateDecreased = (0, _ExportFormat.formatBoolean)((0, _AnalgesiaCalculation.isFetalHeartRateDecreased)(analgesiaData));
              }

              if (observal) {
                var pcaCount = observal.pcaCount,
                    manualBolusCount = observal.manualBolusCount,
                    hasEpiduralCatheterAdjuestment = observal.hasEpiduralCatheterAdjuestment,
                    hasEpiduralCatheterReplacement = observal.hasEpiduralCatheterReplacement,
                    isUnabledToPunctureDura = observal.isUnabledToPunctureDura,
                    isIVEpiduralCatheterInsertion = observal.isIVEpiduralCatheterInsertion,
                    isIntrathecalEpiduralCatheterInsertion = observal.isIntrathecalEpiduralCatheterInsertion,
                    durationOfFirstStageOfLabor = observal.durationOfFirstStageOfLabor,
                    durationOfSecondStageOfLabor = observal.durationOfSecondStageOfLabor,
                    hasCaesareanSection = observal.hasCaesareanSection,
                    hasInstrumental = observal.hasInstrumental,
                    hasLateralEpisiotomy = observal.hasLateralEpisiotomy,
                    lateralEpisiotomyVasScore = observal.lateralEpisiotomyVasScore,
                    hasPrenatalFever = observal.hasPrenatalFever,
                    prenatalFeverTemperature = observal.prenatalFeverTemperature,
                    hasHypotension = observal.hasHypotension,
                    hasVasoactiveAgent = observal.hasVasoactiveAgent,
                    hasNausea = observal.hasNausea,
                    hasVomit = observal.hasVomit,
                    hasPruritus = observal.hasPruritus,
                    hasPostduralPunctureHeadache = observal.hasPostduralPunctureHeadache,
                    hasBackPain = observal.hasBackPain,
                    hasParesthesia = observal.hasParesthesia,
                    patientSatisfactionScore = observal.patientSatisfactionScore,
                    bloodLose = observal.bloodLose,
                    foetalWeight = observal.foetalWeight,
                    foetalHeight = observal.foetalHeight,
                    foetalGender = observal.foetalGender,
                    oneMinuteApgarScore = observal.oneMinuteApgarScore,
                    fiveMinuteApgarScore = observal.fiveMinuteApgarScore,
                    hasNicu = observal.hasNicu,
                    nicuReason = observal.nicuReason,
                    arterialPh = observal.arterialPh,
                    arterialBe = observal.arterialBe,
                    venousPh = observal.venousPh,
                    venousBe = observal.venousBe,
                    _description = observal.description,
                    durationOfFirstPcaTime = (0, _ObservalCalculation.getDurationOfFirstPcaTime)(observal),
                    durationOfFirstManualBolusTime = (0, _ObservalCalculation.getDurationOfFirstManualBolusTime)(observal),
                    durationOfAnalgesia = (0, _ObservalCalculation.getDurationOfAnalgesia)(observal),
                    anestheticsConsumption = (0, _ObservalCalculation.getAnestheticsConsumption)(observal),
                    ropivacaineConsumption = (0, _ObservalCalculation.getRopivacaineConsumption)(observal),
                    sufentanilConsumption = (0, _ObservalCalculation.getSufentanilConsumption)(observal);
                result.pcaCount = (0, _ExportFormat.formatNumber)(pcaCount);
                result.durationOfFirstPcaTime = (0, _ExportFormat.formatNumber)(durationOfFirstPcaTime);
                result.manualBolusCount = (0, _ExportFormat.formatNumber)(manualBolusCount);
                result.durationOfFirstManualBolusTime = (0, _ExportFormat.formatNumber)(durationOfFirstManualBolusTime);
                result.hasEpiduralCatheterAdjuestment = (0, _ExportFormat.formatBoolean)(hasEpiduralCatheterAdjuestment);
                result.hasEpiduralCatheterReplacement = (0, _ExportFormat.formatBoolean)(hasEpiduralCatheterReplacement);
                result.isUnabledToPunctureDura = (0, _ExportFormat.formatBoolean)(isUnabledToPunctureDura);
                result.isIVEpiduralCatheterInsertion = (0, _ExportFormat.formatBoolean)(isIVEpiduralCatheterInsertion);
                result.isIntrathecalEpiduralCatheterInsertion = (0, _ExportFormat.formatBoolean)(isIntrathecalEpiduralCatheterInsertion);
                result.durationOfAnalgesia = (0, _ExportFormat.formatNumber)(durationOfAnalgesia);
                result.anestheticsConsumption = (0, _ExportFormat.formatNumber)(anestheticsConsumption !== null ? anestheticsConsumption.toFixed(2) : null);
                result.ropivacaineConsumption = (0, _ExportFormat.formatNumber)(ropivacaineConsumption !== null ? ropivacaineConsumption.toFixed(2) : null);
                result.sufentanilConsumption = (0, _ExportFormat.formatNumber)(sufentanilConsumption !== null ? sufentanilConsumption.toFixed(2) : null);
                result.durationOfFirstStageOfLabor = (0, _ExportFormat.formatNumber)(durationOfFirstStageOfLabor);
                result.durationOfSecondStageOfLabor = (0, _ExportFormat.formatNumber)(durationOfSecondStageOfLabor);
                result.anestheticsConsumptionPerTime = anestheticsConsumption !== null && durationOfAnalgesia !== null ? (anestheticsConsumption / durationOfAnalgesia * 60).toFixed(1) : null;
                result.ropivacaineConsumptionPerTime = ropivacaineConsumption !== null && durationOfAnalgesia !== null ? (ropivacaineConsumption / durationOfAnalgesia * 60).toFixed(1) : null;
                result.sufentanilConsumptionPerTime = sufentanilConsumption !== null && durationOfAnalgesia !== null ? (sufentanilConsumption / durationOfAnalgesia * 60).toFixed(1) : null;
                result.hasCaesareanSection = (0, _ExportFormat.formatBoolean)(hasCaesareanSection);
                result.hasInstrumental = (0, _ExportFormat.formatBoolean)(hasInstrumental);
                result.hasLateralEpisiotomy = (0, _ExportFormat.formatBoolean)(hasLateralEpisiotomy);
                result.lateralEpisiotomyVasScore = (0, _ExportFormat.formatNumber)(lateralEpisiotomyVasScore);
                result.hasPrenatalFever = (0, _ExportFormat.formatBoolean)(hasPrenatalFever);
                result.prenatalFeverTemperature = (0, _ExportFormat.formatNumber)(prenatalFeverTemperature);
                result.hasHypotension = (0, _ExportFormat.formatBoolean)(hasHypotension);
                result.hasVasoactiveAgent = (0, _ExportFormat.formatBoolean)(hasVasoactiveAgent);
                result.hasNausea = (0, _ExportFormat.formatBoolean)(hasNausea);
                result.hasVomit = (0, _ExportFormat.formatBoolean)(hasVomit);
                result.hasPruritus = (0, _ExportFormat.formatBoolean)(hasPruritus);
                result.hasPostduralPunctureHeadache = (0, _ExportFormat.formatBoolean)(hasPostduralPunctureHeadache);
                result.hasBackPain = (0, _ExportFormat.formatBoolean)(hasBackPain);
                result.hasParesthesia = (0, _ExportFormat.formatBoolean)(hasParesthesia);
                result.patientSatisfactionScore = (0, _ExportFormat.formatNumber)(patientSatisfactionScore !== null ? patientSatisfactionScore * 10 : '');
                result.bloodLose = (0, _ExportFormat.formatNumber)(bloodLose);
                result.foetalWeight = (0, _ExportFormat.formatNumber)(foetalWeight);
                result.foetalHeight = (0, _ExportFormat.formatNumber)(foetalHeight);
                result.foetalGender = (0, _ExportFormat.formatNumber)(foetalGender);
                result.oneMinuteApgarScore = (0, _ExportFormat.formatNumber)(oneMinuteApgarScore);
                result.fiveMinuteApgarScore = (0, _ExportFormat.formatNumber)(fiveMinuteApgarScore);
                result.hasNicu = (0, _ExportFormat.formatBoolean)(hasNicu);
                result.nicuReason = nicuReason;
                result.arterialPh = (0, _ExportFormat.formatNumber)(arterialPh);
                result.arterialBe = (0, _ExportFormat.formatNumber)(arterialBe);
                result.venousPh = (0, _ExportFormat.formatNumber)(venousPh);
                result.venousBe = (0, _ExportFormat.formatNumber)(venousBe);
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

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getExportDPEData.apply(this, arguments);
}

function getExportMeanVAS(_x3) {
  return _getExportMeanVAS.apply(this, arguments);
}
/**
 * 获取导出的宫缩平均 VAS 部分的数据
 * @param data
 * @returns {Promise<(*|null)[][]>}
 */


function _getExportMeanVAS() {
  _getExportMeanVAS = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(data) {
    var header, excelData;
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
            header = [{
              name: '组别',
              key: 'groupName'
            }, {
              name: '姓名',
              key: 'name'
            }, {
              name: '住院号',
              key: 'id'
            }, {
              name: '0min时VAS评分',
              key: 'vasIn0'
            }, {
              name: '2min时VAS评分',
              key: 'vasIn2'
            }, {
              name: '4min时VAS评分',
              key: 'vasIn4'
            }, {
              name: '6min时VAS评分',
              key: 'vasIn6'
            }, {
              name: '8min时VAS评分',
              key: 'vasIn8'
            }, {
              name: '10min时VAS评分',
              key: 'vasIn10'
            }, {
              name: '12min时VAS评分',
              key: 'vasIn12'
            }, {
              name: '14min时VAS评分',
              key: 'vasIn14'
            }, {
              name: '16min时VAS评分',
              key: 'vasIn16'
            }, {
              name: '18min时VAS评分',
              key: 'vasIn18'
            }, {
              name: '20min时VAS评分',
              key: 'vasIn20'
            }, {
              name: '30min时VAS评分',
              key: 'vasIn30'
            }], excelData = data.filter(function (item) {
              return item === null || item === void 0 ? void 0 : item.status;
            }).map(function (item) {
              if (!item) {
                return null;
              }

              var id = item.id,
                  name = item.name,
                  group = item.group,
                  analgesia = item.analgesia,
                  result = {
                id: id,
                name: name,
                groupName: (group === null || group === void 0 ? void 0 : group.name) || ''
              };

              if (analgesia) {
                var analgesiaData = (0, _AnalgesiaCalculation.fullFillAnalgesiaData)(analgesia);
                result.vasIn0 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 0));
                result.vasIn2 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 2));
                result.vasIn4 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 4));
                result.vasIn6 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 6));
                result.vasIn8 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 8));
                result.vasIn10 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 10));
                result.vasIn12 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 12));
                result.vasIn14 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 14));
                result.vasIn16 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 16));
                result.vasIn18 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 18));
                result.vasIn20 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 20));
                result.vasIn30 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 30));
              }

              return header.map(function (item) {
                return result[item === null || item === void 0 ? void 0 : item.key] || null;
              });
            });
            excelData.unshift(header.map(function (item) {
              return item === null || item === void 0 ? void 0 : item.name;
            }));
            return _context2.abrupt("return", excelData);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getExportMeanVAS.apply(this, arguments);
}

function getExportMeanVASWithContraction(_x4) {
  return _getExportMeanVASWithContraction.apply(this, arguments);
}
/**
 * 获取导出的平均 VAS 部分的数据
 * @param data
 * @returns {Promise<(*|null)[][]>}
 */


function _getExportMeanVASWithContraction() {
  _getExportMeanVASWithContraction = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(data) {
    var header, excelData;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.t0 = data;

            if (_context3.t0) {
              _context3.next = 5;
              break;
            }

            _context3.next = 4;
            return (0, _PatientDao.getFullPatients)();

          case 4:
            _context3.t0 = _context3.sent;

          case 5:
            data = _context3.t0;
            header = [{
              name: '组别',
              key: 'groupName'
            }, {
              name: '姓名',
              key: 'name'
            }, {
              name: '住院号',
              key: 'id'
            }, {
              name: '0min时有宫缩的VAS评分',
              key: 'vasIn0'
            }, {
              name: '2min时有宫缩的VAS评分',
              key: 'vasIn2'
            }, {
              name: '4min时有宫缩的VAS评分',
              key: 'vasIn4'
            }, {
              name: '6min时有宫缩的VAS评分',
              key: 'vasIn6'
            }, {
              name: '8min时有宫缩的VAS评分',
              key: 'vasIn8'
            }, {
              name: '10min时有宫缩的VAS评分',
              key: 'vasIn10'
            }, {
              name: '12min时有宫缩的VAS评分',
              key: 'vasIn12'
            }, {
              name: '14min时有宫缩的VAS评分',
              key: 'vasIn14'
            }, {
              name: '16min时有宫缩的VAS评分',
              key: 'vasIn16'
            }, {
              name: '18min时有宫缩的VAS评分',
              key: 'vasIn18'
            }, {
              name: '20min时有宫缩的VAS评分',
              key: 'vasIn20'
            }, {
              name: '30min时有宫缩的VAS评分',
              key: 'vasIn30'
            }], excelData = data.filter(function (item) {
              return item === null || item === void 0 ? void 0 : item.status;
            }).map(function (item) {
              if (!item) {
                return null;
              }

              var id = item.id,
                  group = item.group,
                  name = item.name,
                  analgesia = item.analgesia,
                  result = {
                groupName: (group === null || group === void 0 ? void 0 : group.name) || '',
                name: name,
                id: id
              };

              if (analgesia) {
                var analgesiaData = (0, _AnalgesiaCalculation.fullFillAnalgesiaData)(analgesia);
                result.vasIn0 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScoreWithContraction)(analgesiaData, 0));
                result.vasIn2 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScoreWithContraction)(analgesiaData, 2));
                result.vasIn4 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScoreWithContraction)(analgesiaData, 4));
                result.vasIn6 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScoreWithContraction)(analgesiaData, 6));
                result.vasIn8 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScoreWithContraction)(analgesiaData, 8));
                result.vasIn10 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScoreWithContraction)(analgesiaData, 10));
                result.vasIn12 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScoreWithContraction)(analgesiaData, 12));
                result.vasIn14 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScoreWithContraction)(analgesiaData, 14));
                result.vasIn16 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScoreWithContraction)(analgesiaData, 16));
                result.vasIn18 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScoreWithContraction)(analgesiaData, 18));
                result.vasIn20 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScoreWithContraction)(analgesiaData, 20));
                result.vasIn30 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScoreWithContraction)(analgesiaData, 30));
              }

              return header.map(function (item) {
                return result[item.key] || null;
              });
            });
            excelData.unshift(header.map(function (item) {
              return item === null || item === void 0 ? void 0 : item.name;
            }));
            return _context3.abrupt("return", excelData);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getExportMeanVASWithContraction.apply(this, arguments);
}

function getExportLaterMeanVAS(_x5) {
  return _getExportLaterMeanVAS.apply(this, arguments);
}
/**
 * 获取导出的所有数据
 * @param data
 * @param sensoryBlocks
 * @returns {Promise<{meanVASData: (*|null)[][], laterMeanVASData: (*|null)[][], meanVASWithContractionData: (*|null)[][], dpeData: (*|null)[][]}>}
 */


function _getExportLaterMeanVAS() {
  _getExportLaterMeanVAS = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(data) {
    var header, excelData;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.t0 = data;

            if (_context4.t0) {
              _context4.next = 5;
              break;
            }

            _context4.next = 4;
            return (0, _PatientDao.getFullPatients)();

          case 4:
            _context4.t0 = _context4.sent;

          case 5:
            data = _context4.t0;
            header = [{
              name: '组别',
              key: 'groupName'
            }, {
              name: '姓名',
              key: 'name'
            }, {
              name: '住院号',
              key: 'id'
            }, {
              name: '30min时VAS评分',
              key: 'vasIn30'
            }, {
              name: '2h时VAS评分',
              key: 'vasIn120'
            }, {
              name: '3.5h时VAS评分',
              key: 'vasIn210'
            }, {
              name: '5h时VAS评分',
              key: 'vasIn300'
            }], excelData = data.filter(function (item) {
              return item === null || item === void 0 ? void 0 : item.status;
            }).map(function (item) {
              if (!item) {
                return null;
              }

              var id = item.id,
                  name = item.name,
                  group = item.group,
                  analgesia = item.analgesia,
                  result = {
                id: id,
                name: name,
                groupName: (group === null || group === void 0 ? void 0 : group.name) || ''
              };

              if (analgesia) {
                var analgesiaData = (0, _AnalgesiaCalculation.fullFillAnalgesiaData)(analgesia);
                result.vasIn30 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 30));
                result.vasIn120 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 120));
                result.vasIn210 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 210));
                result.vasIn300 = (0, _ExportFormat.formatNumber)((0, _AnalgesiaCalculation.getVasScore)(analgesiaData, 300));
              }

              return header.map(function (item) {
                return result[item === null || item === void 0 ? void 0 : item.key] || null;
              });
            });
            excelData.unshift(header.map(function (item) {
              return item === null || item === void 0 ? void 0 : item.name;
            }));
            return _context4.abrupt("return", excelData);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getExportLaterMeanVAS.apply(this, arguments);
}

function getExportData(_x6, _x7) {
  return _getExportData.apply(this, arguments);
}

function _getExportData() {
  _getExportData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(data, sensoryBlocks) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.t0 = data;

            if (_context5.t0) {
              _context5.next = 5;
              break;
            }

            _context5.next = 4;
            return (0, _PatientDao.getFullPatients)();

          case 4:
            _context5.t0 = _context5.sent;

          case 5:
            data = _context5.t0;
            _context5.t1 = sensoryBlocks;

            if (_context5.t1) {
              _context5.next = 11;
              break;
            }

            _context5.next = 10;
            return (0, _SensoryBlockDao.getSensoryBlocks)();

          case 10:
            _context5.t1 = _context5.sent;

          case 11:
            sensoryBlocks = _context5.t1;
            _context5.next = 14;
            return getExportDPEData(data, sensoryBlocks);

          case 14:
            _context5.t2 = _context5.sent;
            _context5.next = 17;
            return getExportMeanVAS(data);

          case 17:
            _context5.t3 = _context5.sent;
            _context5.next = 20;
            return getExportMeanVASWithContraction(data);

          case 20:
            _context5.t4 = _context5.sent;
            _context5.next = 23;
            return getExportLaterMeanVAS(data);

          case 23:
            _context5.t5 = _context5.sent;
            return _context5.abrupt("return", {
              dpeData: _context5.t2,
              meanVASData: _context5.t3,
              meanVASWithContractionData: _context5.t4,
              laterMeanVASData: _context5.t5
            });

          case 25:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getExportData.apply(this, arguments);
}

var _default = {
  getExportDPEData: getExportDPEData,
  getExportMeanVAS: getExportMeanVAS,
  getExportMeanVASWithContraction: getExportMeanVASWithContraction,
  getExportData: getExportData
};
exports["default"] = _default;