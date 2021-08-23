/**
 * @file ExportService.js
 */

// Daos
import {getFullPatients} from '../dao/PatientDao.js';
import {getSensoryBlocks} from '../dao/SensoryBlockDao.js';

// Vendors
import {
    Position,
    fullFillAnalgesiaData, getVasScore, getThoracicSensoryBlockByValue,
    getMaxThoracicSensoryBlock, getMinSacralSensoryBlock, getMaxBromageScore
} from '../utils/AnalgesiaCalculation.js';
import {formatBoolean, formatNumber, formatString, formatDuration} from '../utils/ExportFormat.js';
import {duration} from '../utils/Time.js';

/**
 * 获取导出的 DPE 部分的数据
 * @param data
 * @param sensoryBlocks
 * @returns {*}
 */
export async function getPiebOptimalIntervalDataData(data, sensoryBlocks) {

    const header = [
        {name: '组别', key: 'groupName'},
        {name: '住院号', key: 'id'},
        {name: '姓名', key: 'name'},
        {name: '年龄', key: 'age'},
        {name: '身高（cm）', key: 'height'},
        {name: '体重（kg）', key: 'weight'},
        {name: 'BMI', key: 'bmi'},
        {name: '孕周（天）', key: 'gestationalDays'},
        {name: '基础收缩压', key: 'systolicBloodPressure'},
        {name: '基础舒张压', key: 'diastolicBloodPressure'},
        {name: '基础心率', key: 'heartRate'},
        {name: '基础氧饱和度', key: 'pulseOxygenSaturation'},
        {name: '基础胎心率', key: 'fetalHeartRate'},
        {name: '镇痛前宫口大小', key: 'cervicalDilationAtTimeOfEA'},
        {name: '镇痛前VAS评分', key: 'initialVasScore'},
        {name: '镇痛前缩宫素使用', key: 'hasOxytocinAtTimeOfEA'},
        {name: '是否引产', key: 'hasInduction'},
        {name: '穿刺位置', key: 'epPlacementPoint'},
        {name: '镇痛开始时间', key: 'initialTime'},
        {name: '0min VAS评分', key: 'vasIn0'},
        {name: '20min VAS评分', key: 'vasIn20'},
        {name: '1h VAS评分', key: 'vasIn60'},
        {name: '2h VAS评分', key: 'vasIn120'},
        {name: '3h VAS评分', key: 'vasIn180'},
        {name: '4h VAS评分', key: 'vasIn240'},
        {name: '5h VAS评分', key: 'vasIn300'},
        {name: '6h VAS评分', key: 'vasIn360'},
        {name: '左侧最高头端阻滞平面', key: 'maxThoracicSensoryBlockLeft'},
        {name: '右侧最高头端阻滞平面', key: 'maxThoracicSensoryBlockRight'},
        {name: '左侧最高头端阻滞平面（从1小时起）', key: 'maxThoracicSensoryBlockLeftFrom60'},
        {name: '右侧最高头端阻滞平面（从1小时起）', key: 'maxThoracicSensoryBlockRightFrom60'},
        {name: '左侧尾端最低阻滞平面', key: 'minSacralSensoryBlockLeft'},
        {name: '右侧尾端最低阻滞平面', key: 'minSacralSensoryBlockRight'},
        {name: 'Bromage', key: 'bromageScore'},
        {name: '观察终点', key: 'observalEndPoint'},
        {name: '宫口开全时间', key: 'cervixFullyDilatedTime'},
        {name: '镇痛后6h宫口大小', key: 'cervixDilatation'},
        {name: '是否使用PCA', key: 'hasPca'},
        {name: '首次PCA时间', key: 'firstPcaTime'},
        {name: '镇痛开始到首次PCA之间的时长（分钟）', key: 'durationOfFirstPcaTime'},
        {name: '首次手推负荷时间', key: 'firstManualBolusTime'},
        {name: '镇痛开始到首次手推负荷之间的时长（分钟）', key: 'durationOfFirstManualBolusTime'},
        {name: '是否转剖宫产', key: 'hasCaesareanSection'},
        {name: '是否侧切', key: 'hasLateralEpisiotomy'},
        {name: '是否器械助产', key: 'hasInstrumental'},
        {name: '是否低血压', key: 'hasHypotension'},
        {name: '备注', key: 'desc'}
    ];

    const excelData = data.filter(item => item?.status).map(item => {

        if (!item) {
            return null;
        }

        const {
                id, name, group, age, height, weight, gestationalDays, initialVasScore, cervicalDilationAtTimeOfEA,
                systolicBloodPressure, diastolicBloodPressure, heartRate, pulseOxygenSaturation, fetalHeartRate,
                hasOxytocinAtTimeOfEA, hasInduction, description,
                analgesia,
                observal
            } = item,

            result = {

                // 组别
                groupName: group?.name || '',

                // 住院号
                id,

                // 姓名
                name,

                // 年龄
                age: formatNumber(age),

                // 身高（cm）
                height: formatNumber(height),

                // 体重（kg）
                weight: formatNumber(weight),

                // BMI
                bmi: weight && height ? (weight / ((height / 100) ** 2)).toFixed(2) : null,

                // 孕周（天）
                gestationalDays: formatNumber(gestationalDays),

                // 基础收缩压
                systolicBloodPressure: formatNumber(systolicBloodPressure),

                // 基础舒张压
                diastolicBloodPressure: formatNumber(diastolicBloodPressure),

                // 基础心率
                eartRate: formatNumber(heartRate),

                // 基础氧饱和度
                pulseOxygenSaturation: formatNumber(pulseOxygenSaturation),

                // 基础胎心率
                fetalHeartRate: formatNumber(fetalHeartRate),

                // 镇痛前宫口大小
                cervicalDilationAtTimeOfEA: formatNumber(cervicalDilationAtTimeOfEA),

                // 镇痛前VAS评分
                initialVasScore: formatNumber(initialVasScore * 10),

                // 镇痛前缩宫素使用
                hasOxytocinAtTimeOfEA: formatBoolean(hasOxytocinAtTimeOfEA),

                // 是否引产
                hasInduction: formatBoolean(hasInduction),

                // 备注
                desc: description ? [description] : []

            };

        if (analgesia) {

            const analgesiaData = fullFillAnalgesiaData(analgesia);

            // 0min VAS评分
            result.vasIn0 = formatNumber(getVasScore(analgesiaData, 0));

            // 20min VAS评分
            result.vasIn20 = formatNumber(getVasScore(analgesiaData, 20));

            // 1h VAS评分
            result.vasIn60 = formatNumber(getVasScore(analgesiaData, 60));

            // 2h VAS评分
            result.vasIn120 = formatNumber(getVasScore(analgesiaData, 120));

            // 3h VAS评分
            result.vasIn180 = formatNumber(getVasScore(analgesiaData, 180));

            // 4h VAS评分
            result.vasIn240 = formatNumber(getVasScore(analgesiaData, 240));

            // 5h VAS评分
            result.vasIn300 = formatNumber(getVasScore(analgesiaData, 300));

            // 6h VAS评分
            result.vasIn360 = formatNumber(getVasScore(analgesiaData, 360));

            // 左侧最高头端阻滞平面
            result.maxThoracicSensoryBlockLeft = formatNumber(
                getMaxThoracicSensoryBlock(analgesiaData, Position.LEFT)
            );

            // 右侧最高头端阻滞平面
            result.maxThoracicSensoryBlockRight = formatNumber(
                getMaxThoracicSensoryBlock(analgesiaData, Position.RIGHT)
            );

            // 左侧最高头端阻滞平面（从1小时起）
            result.maxThoracicSensoryBlockLeftFrom60 = formatString(getThoracicSensoryBlockByValue(
                sensoryBlocks,
                getMaxThoracicSensoryBlock(analgesiaData, Position.LEFT, 60)
            )?.name);

            // 右侧最高头端阻滞平面（从1小时起）
            result.maxThoracicSensoryBlockRightFrom60 = formatString(getThoracicSensoryBlockByValue(
                sensoryBlocks,
                getMaxThoracicSensoryBlock(analgesiaData, Position.RIGHT, 60)
            )?.name);

            // 左侧尾端最低阻滞平面
            result.minSacralSensoryBlockLeft = formatNumber(
                getMinSacralSensoryBlock(analgesiaData, Position.LEFT)
            );

            // 右侧尾端最低阻滞平面
            result.minSacralSensoryBlockRight = formatNumber(
                getMinSacralSensoryBlock(analgesiaData, Position.RIGHT)
            );

            // Bromage
            result.bromageScore = formatNumber(getMaxBromageScore(analgesiaData));

        }

        if (observal) {

            const {
                epPlacementPoint, initialTime, observalEndPoint, cervixFullyDilatedTime,
                cervixDilatation, pcaCount, firstPcaTime, firstManualBolusTime, hasCaesareanSection,
                hasLateralEpisiotomy, hasInstrumental, hasHypotension, description
            } = observal;

            // 穿刺位置
            result.epPlacementPoint = formatString(epPlacementPoint);

            // 镇痛开始时间
            result.initialTime = formatString(initialTime);

            // 观察终点
            result.observalEndPoint = formatString(observalEndPoint?.name);

            // 宫口开全时间
            result.cervixFullyDilatedTime = formatString(cervixFullyDilatedTime);

            // 镇痛后6h宫口大小
            result.cervixDilatation = formatString(cervixDilatation);

            // 是否使用PCA
            result.hasPca = formatBoolean(+pcaCount > 0);

            // 首次PCA时间
            result.firstPcaTime = formatString(firstPcaTime);

            // 镇痛开始到首次PCA之间的时长（分钟）
            result.durationOfFirstPcaTime = formatDuration(
                duration(initialTime, firstPcaTime, 'HH:mm')
            );

            // 首次手推负荷时间
            result.firstManualBolusTime = formatString(firstManualBolusTime);

            // 镇痛开始到首次手推负荷之间的时长（分钟）
            result.durationOfFirstManualBolusTime = formatDuration(
                duration(initialTime, firstManualBolusTime, 'HH:mm')
            );

            // 是否转剖宫产
            result.hasCaesareanSection = formatBoolean(hasCaesareanSection);

            // 是否侧切
            result.hasLateralEpisiotomy = formatBoolean(hasLateralEpisiotomy);

            // 是否器械助产
            result.hasInstrumental = formatBoolean(hasInstrumental);

            // 是否低血压
            result.hasHypotension = formatBoolean(hasHypotension);

            // 备注
            description && result.desc.push(description);

        }

        // 合并备注
        result.desc = result.desc.join('，');

        return header.map(item => result[item?.key] || null);

    });

    excelData.unshift(header.map(item => item?.name));

    return excelData;

}

/**
 * 获取导出的所有数据
 * @param data
 * @param sensoryBlocks
 * @returns {*}
 */
export async function getExportData(data, sensoryBlocks) {

    data = data || await getFullPatients();
    sensoryBlocks = sensoryBlocks || await getSensoryBlocks();

    return {
        piebOptimalIntervalData: await getPiebOptimalIntervalDataData(data, sensoryBlocks)
    };

}

export default {
    getExportData
};
