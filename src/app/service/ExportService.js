/**
 * @file ExportService.js
 */

// Daos
import {getFullPatients} from '../dao/PatientDao.js';

// Vendors
import {
    Position,
    fullFillAnalgesiaData, getVasScore, getMaxThoracicSensoryBlock, getMinSacralSensoryBlock, getMaxBromageScore
} from '../utils/AnalgesiaCalculation.js';
import {formatBoolean, formatNumber, formatString, formatDuration} from '../utils/ExportFormat.js';
import {duration} from '../utils/Time.js';

/**
 * 获取导出的 DPE 部分的数据
 * @param data
 * @returns {*}
 */
export async function getPiebOptimalIntervalDataData(data) {

    data = data || await getFullPatients();

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
            {name: '20min VAS评分', key: 'vasIn20'},
            {name: '左侧最高头端阻滞平面', key: 'maxThoracicSensoryBlockLeft'},
            {name: '右侧最高头端阻滞平面', key: 'maxThoracicSensoryBlockRight'},
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
        ],

        excelData = data.filter(item => item?.status).map(item => {

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
                    groupName: group?.name || '',
                    id,
                    name,
                    age: formatNumber(age),
                    height: formatNumber(height),
                    weight: formatNumber(weight),
                    bmi: weight && height ? (weight / ((height / 100) ** 2)).toFixed(2) : null,
                    gestationalDays: formatNumber(gestationalDays),
                    systolicBloodPressure: formatNumber(systolicBloodPressure),
                    diastolicBloodPressure: formatNumber(diastolicBloodPressure),
                    heartRate: formatNumber(heartRate),
                    pulseOxygenSaturation: formatNumber(pulseOxygenSaturation),
                    fetalHeartRate: formatNumber(fetalHeartRate),
                    cervicalDilationAtTimeOfEA: formatNumber(cervicalDilationAtTimeOfEA),
                    initialVasScore: formatNumber(initialVasScore * 10),
                    hasOxytocinAtTimeOfEA: formatBoolean(hasOxytocinAtTimeOfEA),
                    hasInduction: formatBoolean(hasInduction),
                    desc: description ? [description] : []
                };

            if (analgesia) {

                const analgesiaData = fullFillAnalgesiaData(analgesia);

                result.vasIn20 = formatNumber(getVasScore(analgesiaData, 20));
                result.maxThoracicSensoryBlockLeft = formatNumber(
                    getMaxThoracicSensoryBlock(analgesiaData, Position.LEFT)
                );
                result.maxThoracicSensoryBlockRight = formatNumber(
                    getMaxThoracicSensoryBlock(analgesiaData, Position.RIGHT)
                );
                result.minSacralSensoryBlockLeft = formatNumber(
                    getMinSacralSensoryBlock(analgesiaData, Position.LEFT)
                );
                result.minSacralSensoryBlockRight = formatNumber(
                    getMinSacralSensoryBlock(analgesiaData, Position.RIGHT)
                );
                result.bromageScore = formatNumber(getMaxBromageScore(analgesiaData));

            }

            if (observal) {

                const {
                    epPlacementPoint, initialTime, observalEndPoint, cervixFullyDilatedTime,
                    cervixDilatation, pcaCount, firstPcaTime, firstManualBolusTime, hasCaesareanSection,
                    hasLateralEpisiotomy, hasInstrumental, hasHypotension, description
                } = observal;

                result.epPlacementPoint = formatString(epPlacementPoint);
                result.initialTime = formatString(initialTime);
                result.observalEndPoint = formatString(observalEndPoint?.name);
                result.cervixFullyDilatedTime = formatString(cervixFullyDilatedTime);
                result.cervixDilatation = formatString(cervixDilatation);
                result.hasPca = formatBoolean(+pcaCount > 0);
                result.firstPcaTime = formatString(firstPcaTime);
                result.durationOfFirstPcaTime = formatDuration(
                    duration(initialTime, firstPcaTime, 'HH:mm')
                );
                result.firstManualBolusTime = formatString(firstManualBolusTime);
                result.durationOfFirstManualBolusTime = formatDuration(
                    duration(initialTime, firstManualBolusTime, 'HH:mm')
                );
                result.hasCaesareanSection = formatBoolean(hasCaesareanSection);
                result.hasLateralEpisiotomy = formatBoolean(hasLateralEpisiotomy);
                result.hasInstrumental = formatBoolean(hasInstrumental);
                result.hasHypotension = formatBoolean(hasHypotension);
                description && result.desc.push(description);

            }

            result.desc = result.desc.join('，');

            return header.map(item => result[item?.key] || null);

        });

    excelData.unshift(header.map(item => item?.name));

    return excelData;

}

/**
 * 获取导出的所有数据
 * @param data
 * @returns {*}
 */
export async function getExportData(data) {

    data = data || await getFullPatients();

    return {
        piebOptimalIntervalData: await getPiebOptimalIntervalDataData(data)
    };

}

export default {
    getExportData
};
