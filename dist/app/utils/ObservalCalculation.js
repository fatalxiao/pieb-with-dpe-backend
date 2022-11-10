"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getAnestheticsConsumption = getAnestheticsConsumption;
exports.getDurationOfAnalgesia = getDurationOfAnalgesia;
exports.getDurationOfFirstManualBolusTime = getDurationOfFirstManualBolusTime;
exports.getDurationOfFirstPcaTime = getDurationOfFirstPcaTime;
exports.getRopivacaineConsumption = getRopivacaineConsumption;
exports.getSufentanilConsumption = getSufentanilConsumption;
var _Time = require("./Time");
/**
 * @file ObservalCalculation.js
 */

// Vendors

/**
 * 根据 "麻醉开始时间" 和 "首次 PCA 时间"，计算两者间的时长
 * @param observalData
 * @returns {string|null}
 */
function getDurationOfFirstPcaTime(observalData) {
  if (!observalData || !observalData.initialTime || !observalData.firstPcaTime) {
    return null;
  }
  return '' + ~~((0, _Time.duration)(observalData.initialTime, observalData.firstPcaTime) / 1000 / 60);
}

/**
 * 根据 "麻醉开始时间" 和 "首次人工硬膜外追加时间"，计算两者间的时长
 * @param observalData
 * @returns {string|null}
 */
function getDurationOfFirstManualBolusTime(observalData) {
  if (!observalData || !observalData.initialTime || !observalData.firstManualBolusTime) {
    return null;
  }
  return '' + ~~((0, _Time.duration)(observalData.initialTime, observalData.firstManualBolusTime) / 1000 / 60);
}

/**
 * 根据 "麻醉开始时间" 和 "分娩时间"，计算两者间的时长
 * @param observalData
 * @returns {*}
 */
function getDurationOfAnalgesia(observalData) {
  if (!observalData || !observalData.initialTime || !observalData.birthTime) {
    return null;
  }

  // 总镇痛时间 + 60 分钟
  return '' + (~~((0, _Time.duration)(observalData.initialTime, observalData.birthTime) / 1000 / 60) + 60);
}

/**
 * 获取所有麻醉药的消耗量
 * @param observalData
 * @returns {null|*}
 */
function getAnestheticsConsumption(observalData) {
  if (!observalData) {
    return null;
  }
  var result;
  if (!isNaN(observalData.pumpConsumption)) {
    if (!result) {
      result = 0;
    }
    result += +observalData.pumpConsumption;
  }
  if (!isNaN(observalData.bolus)) {
    if (!result) {
      result = 0;
    }
    result += +observalData.bolus;
  }
  return result === undefined ? null : result;
}

/**
 * 获取罗哌卡因的消耗量
 * @param observalData
 * @returns {null|*}
 */
function getRopivacaineConsumption(observalData) {
  if (!observalData) {
    return null;
  }
  var result;
  if (!isNaN(observalData.pumpConsumption)) {
    if (!result) {
      result = 0;
    }
    result += +observalData.pumpConsumption;
  }
  if (!isNaN(observalData.bolus)) {
    if (!result) {
      result = 0;
    }
    result += +observalData.bolus * 1.25;
  }
  return result === undefined ? null : result;
}

/**
 * 获取舒芬太尼的消耗量
 * @param observalData
 * @returns {null|*}
 */
function getSufentanilConsumption(observalData) {
  if (!observalData) {
    return null;
  }
  var result;
  if (!isNaN(observalData.pumpConsumption)) {
    if (!result) {
      result = 0;
    }
    result += +observalData.pumpConsumption;
  }
  if (!isNaN(observalData.bolus)) {
    if (!result) {
      result = 0;
    }
    result += +observalData.bolus;
  }
  return result === undefined ? null : result * .3;
}
var _default = {
  getDurationOfFirstPcaTime: getDurationOfFirstPcaTime,
  getDurationOfFirstManualBolusTime: getDurationOfFirstManualBolusTime,
  getDurationOfAnalgesia: getDurationOfAnalgesia,
  getAnestheticsConsumption: getAnestheticsConsumption,
  getRopivacaineConsumption: getRopivacaineConsumption,
  getSufentanilConsumption: getSufentanilConsumption
};
exports["default"] = _default;