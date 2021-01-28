/**
 * @file AnalgesiaCalculation.js
 */

const

    /**
     * 左侧或右侧
     * @type {{LEFT: string, RIGHT: string}}
     */
    Position = {
        LEFT: 'Left',
        RIGHT: 'Right'
    },

    /**
     * 行数据
     * @type {{thoracicSensoryBlockLeft: null, bromageScore: null, fetalHeartRate: null, sacralSensoryBlockRight: null, pulseOxygenSaturation: null, heartRate: null, thoracicSensoryBlockRight: null, sacralSensoryBlockLeft: null, diastolicBloodPressure: null, hasContraction: boolean, systolicBloodPressure: null, vasScore: null}}
     */
    BASE_DATA = {
        hasContraction: false,
        vasScore: null,
        thoracicSensoryBlockLeft: null,
        thoracicSensoryBlockRight: null,
        sacralSensoryBlockLeft: null,
        sacralSensoryBlockRight: null,
        bromageScore: null,
        systolicBloodPressure: null,
        diastolicBloodPressure: null,
        heartRate: null,
        pulseOxygenSaturation: null,
        fetalHeartRate: null
    },

    /**
     * 默认的时间点
     * @type {number[]}
     */
    DEFAULT_TIMEPOINTS = [
        0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 30, 2 * 60, 3.5 * 60, 5 * 60, 6.5 * 60, 8 * 60
    ];

/**
 * 获取默认的麻醉数据
 * @param timePoints
 * @returns {({thoracicSensoryBlockLeft, bromageScore, fetalHeartRate, sacralSensoryBlockRight, pulseOxygenSaturation, heartRate, thoracicSensoryBlockRight, sacralSensoryBlockLeft, diastolicBloodPressure, hasContraction, systolicBloodPressure, vasScore}&{timePoint: number})[]}
 */
export function getDefaultData(timePoints = DEFAULT_TIMEPOINTS) {
    return timePoints.map(timePoint => ({
        ...BASE_DATA,
        timePoint
    }));
}

/**
 * 将现有的 analgesia 数据和默认的麻醉数据合并，插入现有数据中没有的时间点
 * @param analgesiaData
 * @returns {({thoracicSensoryBlockLeft, bromageScore, fetalHeartRate, sacralSensoryBlockRight, pulseOxygenSaturation, heartRate, thoracicSensoryBlockRight, sacralSensoryBlockLeft, diastolicBloodPressure, hasContraction, systolicBloodPressure, vasScore}&{timePoint: number})[]}
 */
export function fullFillAnalgesiaData(analgesiaData) {

    if (!analgesiaData || analgesiaData?.length < 1) {
        return [];
    }

    const data = getDefaultData();
    analgesiaData.sort((a, b) => a.timePoint - b.timePoint);

    if (analgesiaData?.length > 0) {

        for (let resItem of analgesiaData) {

            const index = data.findIndex(a => a.timePoint === resItem.timePoint);

            if (index > -1) {
                data[index] = resItem;
            } else {

                let timePoint = DEFAULT_TIMEPOINTS[DEFAULT_TIMEPOINTS.length - 1];

                while (timePoint < resItem.timePoint) {

                    timePoint += 1.5 * 60;

                    if (timePoint >= resItem.timePoint) {
                        data.push(resItem);
                    } else {
                        const i = data.findIndex(a => a.timePoint === timePoint);
                        if (i < 0) {
                            data.push({...BASE_DATA, timePoint});
                        }
                    }
                }
            }
        }
    }

    return data;

}

/**
 * 获取 Vas 评分
 * @param analgesiaData
 * @param timePoint
 * @returns {string}
 */
export function getVasScore(analgesiaData, timePoint) {

    if (!analgesiaData || analgesiaData.length < 1) {
        return '';
    }

    analgesiaData.sort((a, b) => a.timePoint - b.timePoint);

    const index = analgesiaData.findIndex(item => item && item.timePoint === timePoint);

    if (index === -1) {
        return '';
    }

    const reuslt = analgesiaData[index].vasScore;
    return reuslt === null ? '' : '' + reuslt * 10;

}

/**
 * 获取宫缩时的 Vas 评分
 * @param analgesiaData
 * @param timePoint
 * @returns {string}
 */
export function getVasScoreWithContraction(analgesiaData, timePoint) {

    if (!analgesiaData || analgesiaData.length < 1) {
        return '';
    }

    analgesiaData.sort((a, b) => a.timePoint - b.timePoint);

    const index = analgesiaData.findIndex(item => item && item.timePoint === timePoint);

    if (index === -1 || !analgesiaData[index].hasContraction) {
        return '';
    }

    const reuslt = analgesiaData[index].vasScore;
    return reuslt === null ? '' : '' + reuslt * 10;

}

/**
 * Vas 评分是否小于1
 * @param analgesiaData
 * @param timePoint
 * @returns {boolean}
 */
export function isVasLessThan1(analgesiaData, timePoint) {

    if (!analgesiaData || analgesiaData.length < 1) {
        return false;
    }

    analgesiaData.sort((a, b) => a.timePoint - b.timePoint);

    for (let item of analgesiaData) {

        if (item > timePoint) {
            return false;
        }

        if (item.hasContraction && item.vasScore !== null && item.vasScore <= 1) {
            return true;
        }

    }

}

/**
 * 获取 VAS 评分 <= 1 的时间点
 * 首先找到最早有宫缩且 VAS 评分 <= 1 的时间点，如果找到的前一时间点 VAS 评分 <= 1 取前一时间点，否则取找到的时间点
 * @param analgesiaData
 * @returns {*}
 */
export function getTimePointOfVasLessThan1(analgesiaData) {

    if (!analgesiaData || analgesiaData.length < 1) {
        return null;
    }

    analgesiaData.sort((a, b) => a.timePoint - b.timePoint);

    const index = analgesiaData.findIndex(item =>
        item && item.hasContraction && item.vasScore !== null && item.vasScore <= 1);

    if (index === -1) {
        return null;
    }

    if (index === 0) {
        return 0;
    }

    const prevItem = analgesiaData[index - 1];
    if (prevItem && prevItem.vasScore !== null && prevItem.vasScore <= 1) {
        return prevItem.timePoint;
    }

    return analgesiaData[index].timePoint;

}

/**
 * 是否在指定时间内达到最低阻滞
 * @param analgesiaData
 * @param sensory
 * @param timePoint
 * @param position
 * @returns {boolean}
 */
export function isSacralSensoryInTime(analgesiaData, sensory, timePoint, position) {

    if (!analgesiaData || analgesiaData.length < 1) {
        return false;
    }

    analgesiaData.sort((a, b) => a.timePoint - b.timePoint);

    for (let item of analgesiaData) {

        if (item.timePoint > timePoint) {
            return false;
        }

        if (item[`sacralSensoryBlock${position}Value`] >= sensory) {
            return true;
        }

    }

}

/**
 * 获取最大的最高阻滞
 * @param analgesiaData
 * @param position
 * @returns {null|any}
 */
export function getMaxThoracicSensoryBlock(analgesiaData, position) {

    if (!analgesiaData || analgesiaData.length < 1) {
        return null;
    }

    analgesiaData.sort((a, b) => a.timePoint - b.timePoint);

    const data = analgesiaData.map(item => item[`thoracicSensoryBlock${position}Value`]).filter(item => item);

    return data.length > 0 ? Math.max(...data) : null;

}

/**
 * 获取最小的最低阻滞
 * @param analgesiaData
 * @param position
 * @returns {null|any}
 */
export function getMinSacralSensoryBlock(analgesiaData, position) {

    if (!analgesiaData || analgesiaData.length < 1) {
        return null;
    }

    analgesiaData.sort((a, b) => a.timePoint - b.timePoint);

    const data = analgesiaData.map(item => item[`sacralSensoryBlock${position}Value`]).filter(item => item);

    return data.length > 0 ? Math.max(...data) : null;

}

/**
 * 是否有单侧阻滞
 * @param analgesiaData
 * @returns {boolean}
 */
export function isUnilateralSensoryBlock(analgesiaData) {

    if (!analgesiaData || analgesiaData.length < 1) {
        return false;
    }

    analgesiaData.sort((a, b) => a.timePoint - b.timePoint);

    for (let item of analgesiaData) {
        if (Math.abs(item.sacralSensoryBlockLeftValue - item.sacralSensoryBlockRightValue) > 2
            || Math.abs(item.thoracicSensoryBlockLeftValue - item.thoracicSensoryBlockRightValue) > 2) {
            return true;
        }
    }

    return false;

}

/**
 * 获取指定最高阻滞的时间点
 * @param analgesiaData
 * @param sensoryBlock
 * @returns {null|number|Analgesia.timePoint|{set, field, type}|where.timePoint|{}}
 */
export function getTimePointOfThoracicSensoryBlock(analgesiaData, sensoryBlock) {

    if (!analgesiaData || analgesiaData.length < 1) {
        return null;
    }

    analgesiaData.sort((a, b) => a.timePoint - b.timePoint);

    for (let item of analgesiaData) {
        if (item.thoracicSensoryBlockLeftValue >= sensoryBlock && item.thoracicSensoryBlockRightValue >= sensoryBlock) {
            return item.timePoint;
        }
    }

    return null;

}

/**
 * 获取指定最低阻滞的时间点
 * @param analgesiaData
 * @param sensoryBlock
 * @returns {number|Analgesia.timePoint|{set, field, type}|*|where.timePoint|{}|null}
 */
export function getTimePointOfSacralSensoryBlock(analgesiaData, sensoryBlock) {

    if (!analgesiaData || analgesiaData.length < 1) {
        return null;
    }

    analgesiaData.sort((a, b) => a.timePoint - b.timePoint);

    for (let item of analgesiaData) {
        if (item.sacralSensoryBlockLeftValue >= sensoryBlock && item.sacralSensoryBlockRightValue >= sensoryBlock) {
            return item.timePoint;
        }
    }

    return null;

}

/**
 * 是否有胎儿心率降低
 * @param analgesiaData
 * @returns {boolean}
 */
export function isFetalHeartRateDecreased(analgesiaData) {

    if (!analgesiaData || analgesiaData.length < 1) {
        return false;
    }

    analgesiaData.sort((a, b) => a.timePoint - b.timePoint);

    for (let item of analgesiaData) {
        if (item.timePoint < 30 && item.fetalHeartRate !== null && item.fetalHeartRate < 110) {
            return true;
        }
    }

    return false;

}

/**
 * 是否满意镇痛
 * 如果当前时间点的VAS评分<=1，要么当前时间点有宫缩，要么下个时间点有宫缩切VAS评分<=1，即为true，否则为false
 * @param analgesiaData
 * @param timePoint
 * @returns {boolean}
 */
export function isAdequatePainRelief(analgesiaData, timePoint) {

    if (!analgesiaData || analgesiaData.length < 1) {
        return false;
    }

    analgesiaData.sort((a, b) => a.timePoint - b.timePoint);

    const index = analgesiaData.findIndex(item => item && item.timePoint === timePoint);

    if (index === -1 || analgesiaData[index].vasScore === null || analgesiaData[index].vasScore > 1) {
        return false;
    }

    if (analgesiaData[index].hasContraction) {
        return true;
    }

    let prevIndex = index - 1;
    while (prevIndex >= 0) {

        if (analgesiaData[prevIndex].hasContraction
            && analgesiaData[prevIndex].vasScore !== null && analgesiaData[prevIndex].vasScore <= 1) {
            return true;
        }

        if (analgesiaData[prevIndex].vasScore > 1) {
            break;
        }

        prevIndex--;

    }

    let nextIndex = index + 1;
    while (nextIndex < analgesiaData.length && analgesiaData[nextIndex].timePoint <= 30) {

        if (analgesiaData[nextIndex].hasContraction
            && analgesiaData[nextIndex].vasScore !== null && analgesiaData[nextIndex].vasScore <= 1) {
            return true;
        }

        if (analgesiaData[nextIndex].vasScore > 1) {
            break;
        }

        nextIndex++;

    }

    return false;

}

export default {

    Position,

    fullFillAnalgesiaData,
    getVasScore,
    getVasScoreWithContraction,
    isVasLessThan1,
    getTimePointOfVasLessThan1,
    isSacralSensoryInTime,
    getMaxThoracicSensoryBlock,
    getMinSacralSensoryBlock,
    isUnilateralSensoryBlock,
    getTimePointOfThoracicSensoryBlock,
    getTimePointOfSacralSensoryBlock,
    isFetalHeartRateDecreased,
    isAdequatePainRelief

};
