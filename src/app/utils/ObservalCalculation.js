/**
 * @file ObservalCalculation.js
 */

// Vendors
import {duration} from '../utils/Time.js';

/**
 * 根据 "麻醉开始时间" 和 "首次 PCA 时间"，计算两者间的时长
 * @param observalData
 * @returns {string|null}
 */
export function getDurationOfFirstPcaTime(observalData) {

    if (!observalData || !observalData.initialTime || !observalData.firstPcaTime) {
        return null;
    }

    return '' + (~~(duration(observalData.initialTime, observalData.firstPcaTime) / 1000 / 60));

}

/**
 * 根据 "麻醉开始时间" 和 "首次人工硬膜外追加时间"，计算两者间的时长
 * @param observalData
 * @returns {string|null}
 */
export function getDurationOfFirstManualBolusTime(observalData) {

    if (!observalData || !observalData.initialTime || !observalData.firstManualBolusTime) {
        return null;
    }

    return '' + (~~(duration(observalData.initialTime, observalData.firstManualBolusTime) / 1000 / 60));

}

/**
 * 根据 "麻醉开始时间" 和 "分娩时间"，计算两者间的时长
 * @param observalData
 * @returns {*}
 */
export function getDurationOfAnalgesia(observalData) {

    if (!observalData || !observalData.initialTime || !observalData.birthTime) {
        return null;
    }

    // 总镇痛时间 + 60 分钟
    return '' + (~~(duration(observalData.initialTime, observalData.birthTime) / 1000 / 60) + 60);

}

/**
 * 获取所有麻醉药的消耗量
 * @param observalData
 * @returns {null|*}
 */
export function getAnestheticsConsumption(observalData) {

    if (!observalData) {
        return null;
    }

    let result;

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
export function getRopivacaineConsumption(observalData) {

    if (!observalData) {
        return null;
    }

    let result;

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
export function getSufentanilConsumption(observalData) {

    if (!observalData) {
        return null;
    }

    let result;

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

export default {
    getDurationOfFirstPcaTime,
    getDurationOfFirstManualBolusTime,
    getDurationOfAnalgesia,
    getAnestheticsConsumption,
    getRopivacaineConsumption,
    getSufentanilConsumption
};
