/**
 * @file ExportService.js
 */

// Daos
import {getFullPatients} from '../dao/PatientDao.js';
import {getSensoryBlocks} from '../dao/SensoryBlockDao.js';

// Vendors
import {
    Position,
    fullFillAnalgesiaData, getVasScore, getVasScoreWithContraction, isVasLessThan1,
    getTimePointOfVasLessThan1, isSacralSensoryInTime, getMaxThoracicSensoryBlock,
    getMinSacralSensoryBlock, isUnilateralSensoryBlock, getTimePointOfThoracicSensoryBlock,
    getTimePointOfSacralSensoryBlock, isFetalHeartRateDecreased, isAdequatePainRelief
} from '../utils/AnalgesiaCalculation.js';
import {
    getDurationOfFirstPcaTime, getDurationOfFirstManualBolusTime, getDurationOfAnalgesia,
    getAnestheticsConsumption, getRopivacaineConsumption, getSufentanilConsumption
} from '../utils/ObservalCalculation.js';
import {formatBoolean, formatNumber} from '../utils/ExportFormat.js';

/**
 * 获取导出的 DPE 部分的数据
 * @param data
 * @param sensoryBlocks
 * @returns {Promise<(*|null)[][]>}
 */
export async function getExportDPEData(data, sensoryBlocks) {

    data = data || await getFullPatients();
    sensoryBlocks = sensoryBlocks || await getSensoryBlocks();

    const header = [
            {name: '组别', key: 'groupName'},
            {name: '姓名', key: 'name'},
            {name: '住院号', key: 'id'},
            {name: '年龄', key: 'age'},
            {name: '身高', key: 'height'},
            {name: '体重', key: 'weight'},
            {name: 'BMI', key: 'bmi'},
            {name: '孕周', key: 'gestationalDays'},
            {name: '镇痛前VAS评分', key: 'initialVasScore'},
            {name: '镇痛前宫口大小', key: 'cervicalDilationAtTimeOfEA'},
            {name: '基础收缩压', key: 'systolicBloodPressure'},
            {name: '基础舒张压', key: 'diastolicBloodPressure'},
            {name: '基础心率', key: 'heartRate'},
            {name: '基础氧饱和度', key: 'pulseOxygenSaturation'},
            {name: '基础胎心率', key: 'fetalHeartRate'},
            {name: '镇痛前缩宫素使用', key: 'hasOxytocinAtTimeOfEA'},
            {name: '是否引产', key: 'hasInduction'},
            {name: '20min内VAS≤1', key: 'isVasLessThan1In20'},
            {name: '30min内VAS≤1', key: 'isVasLessThan1In30'},
            {name: 'VAS≤1的时间', key: 'timePointOfVasLessThan1'},
            {name: '0min时是否达到满意镇痛', key: 'isAdequatePainReliefIn0'},
            {name: '2min时是否达到满意镇痛', key: 'isAdequatePainReliefIn2'},
            {name: '4min时是否达到满意镇痛', key: 'isAdequatePainReliefIn4'},
            {name: '6min时是否达到满意镇痛', key: 'isAdequatePainReliefIn6'},
            {name: '8min时是否达到满意镇痛', key: 'isAdequatePainReliefIn8'},
            {name: '10min时是否达到满意镇痛', key: 'isAdequatePainReliefIn10'},
            {name: '12min时是否达到满意镇痛', key: 'isAdequatePainReliefIn12'},
            {name: '14min时是否达到满意镇痛', key: 'isAdequatePainReliefIn14'},
            {name: '16min时是否达到满意镇痛', key: 'isAdequatePainReliefIn16'},
            {name: '18min时是否达到满意镇痛', key: 'isAdequatePainReliefIn18'},
            {name: '20min时是否达到满意镇痛', key: 'isAdequatePainReliefIn20'},
            {name: '30min时是否达到满意镇痛', key: 'isAdequatePainReliefIn30'},
            {name: '20min内左侧是否达到S1', key: 'isS1In20Left'},
            {name: '20min内右侧是否达到S1', key: 'isS1In20Right'},
            {name: '20min内是否双侧是否达到S1', key: 'isS1In20Both'},
            {name: '20min内左侧是否达到S2', key: 'isS2In20Left'},
            {name: '20min内右侧是否达到S2', key: 'isS2In20Right'},
            {name: '20min内是否双侧是否达到S2', key: 'isS2In20Both'},
            {name: '30min内左侧是否达到S1', key: 'isS1In30Left'},
            {name: '30min内右侧是否达到S1', key: 'isS1In30Right'},
            {name: '30min内是否双侧是否达到S1', key: 'isS1In30Both'},
            {name: '30min内左侧是否达到S2', key: 'isS2In30Left'},
            {name: '30min内右侧是否达到S2', key: 'isS2In30Right'},
            {name: '30min内是否双侧是否达到S2', key: 'isS2In30Both'},
            {name: '2h时VAS评分', key: 'vasIn120'},
            {name: '3.5h时VAS评分', key: 'vasIn210'},
            {name: '左侧最高头端阻滞平面', key: 'maxThoracicSensoryBlockLeft'},
            {name: '右侧最高头端阻滞平面', key: 'maxThoracicSensoryBlockRight'},
            {name: '左侧尾端最低阻滞平面', key: 'minSacralSensoryBlockLeft'},
            {name: '右侧尾端最低阻滞平面', key: 'minSacralSensoryBlockRight'},
            {name: '是否单侧阻滞', key: 'isUnilateralSensoryBlock'},
            {name: '达到T8时间', key: 'timePointOfT8'},
            {name: '到达T10时间', key: 'timePointOfT10'},
            {name: '到达S1时间', key: 'timePointOfS1'},
            {name: '到达S2时间', key: 'timePointOfS2'},
            {name: 'PCA次数', key: 'pcaCount'},
            {name: '首次PCA时间', key: 'durationOfFirstPcaTime'},
            {name: 'bolus次数', key: 'manualBolusCount'},
            {name: '首次bolus时间', key: 'durationOfFirstManualBolusTime'},
            {name: '硬膜外导管重置', key: 'hasEpiduralCatheterAdjuestment'},
            {name: '硬膜外导管调整', key: 'hasEpiduralCatheterReplacement'},
            {name: 'DPE未见脑脊液', key: 'isUnabledToPunctureDura'},
            {name: '血性置管', key: 'isIVEpiduralCatheterInsertion'},
            {name: '蛛网膜下腔置管', key: 'isIntrathecalEpiduralCatheterInsertion'},
            {name: '镇痛时长', key: 'durationOfAnalgesia'},
            {name: '局麻药消耗量', key: 'anestheticsConsumption'},
            {name: '罗哌卡因总消耗量', key: 'ropivacaineConsumption'},
            {name: '舒芬太尼总消耗量', key: 'sufentanilConsumption'},
            {name: '第一产程时长', key: 'durationOfFirstStageOfLabor'},
            {name: '第二产程时长', key: 'durationOfSecondStageOfLabor'},
            {name: '每小时局麻药消耗量', key: 'anestheticsConsumptionPerTime'},
            {name: '每小时罗哌卡因总消耗量', key: 'ropivacaineConsumptionPerTime'},
            {name: '每小时舒芬太尼总消耗量', key: 'sufentanilConsumptionPerTime'},
            {name: '是否胎心下降', key: 'isFetalHeartRateDecreased'},
            {name: '是否转剖宫产', key: 'hasCaesareanSection'},
            {name: '剖宫产原因', key: 'caesareanSectionReason'},
            {name: '是否器械助产', key: 'hasInstrumental'},
            {name: '是否侧切', key: 'hasLateralEpisiotomy'},
            {name: '侧切时的VAS评分', key: 'lateralEpisiotomyVasScore'},
            {name: '是否产前发热', key: 'hasPrenatalFever'},
            {name: '产前发热体温', key: 'prenatalFeverTemperature'},
            {name: '低血压的发生', key: 'hasHypotension'},
            {name: '血管活性药物使用', key: 'hasVasoactiveAgent'},
            {name: '恶心', key: 'hasNausea'},
            {name: '呕吐', key: 'hasVomit'},
            {name: '瘙痒', key: 'hasPruritus'},
            {name: '头痛', key: 'hasPostduralPunctureHeadache'},
            {name: '背痛', key: 'hasBackPain'},
            {name: '感觉异常', key: 'hasParesthesia'},
            {name: '镇痛满意度评分', key: 'patientSatisfactionScore'},
            {name: '其他不适', key: 'otherdiscomfort'},
            {name: '总出血量', key: 'bloodLose'},
            {name: '新生儿体重', key: 'foetalWeight'},
            {name: '新生儿身高', key: 'foetalHeight'},
            {name: '性别', key: 'foetalGender'},
            {name: '1minapgar评分', key: 'oneMinuteApgarScore'},
            {name: '5minapgar评分', key: 'fiveMinuteApgarScore'},
            {name: '是否去儿科观察室', key: 'hasNicu'},
            {name: '儿科观察室原因', key: 'nicuReason'},
            {name: '脐动脉PH', key: 'arterialPh'},
            {name: '脐动脉BE', key: 'arterialBe'},
            {name: '脐静脉PH', key: 'venousPh'},
            {name: '脐静脉BE', key: 'venousBe'},
            {name: '备注', key: 'desc'}
        ],

        s1Value = sensoryBlocks.findOne(item => item?.type === 2 && item?.name === 'S1').value,
        s2Value = sensoryBlocks.findOne(item => item?.type === 2 && item?.name === 'S2').value,
        t8Value = sensoryBlocks.findOne(item => item?.type === 1 && item?.name === 'T8').value,
        t10Value = sensoryBlocks.findOne(item => item?.type === 1 && item?.name === 'T10').value,

        excelData = data.filter(item => item?.status).map(item => {

            if (!item) {
                return null;
            }

            const {
                    id, name, group, age, height, weight, gestationalDays, initialVasScore, cervicalDilationAtTimeOfEA,
                    systolicBloodPressure, diastolicBloodPressure, heartRate, pulseOxygenSaturation, fetalHeartRate,
                    hasOxytocinAtTimeOfEA, hasInduction, description, analgesia, observal
                } = item,

                result = {
                    id,
                    name,
                    groupName: group?.name || '',
                    age: formatNumber(age),
                    height: formatNumber(height),
                    weight: formatNumber(weight),
                    bmi: weight && height ? (weight / ((height / 100) ** 2)).toFixed(2) : null,
                    gestationalDays: formatNumber(gestationalDays),
                    initialVasScore: formatNumber(initialVasScore * 10),
                    cervicalDilationAtTimeOfEA: formatNumber(cervicalDilationAtTimeOfEA),
                    systolicBloodPressure: formatNumber(systolicBloodPressure),
                    diastolicBloodPressure: formatNumber(diastolicBloodPressure),
                    heartRate: formatNumber(heartRate),
                    pulseOxygenSaturation: formatNumber(pulseOxygenSaturation),
                    fetalHeartRate: formatNumber(fetalHeartRate),
                    hasOxytocinAtTimeOfEA: formatBoolean(hasOxytocinAtTimeOfEA),
                    hasInduction: formatBoolean(hasInduction),
                    desc: description ? [description] : []
                };

            if (analgesia) {

                const analgesiaData = fullFillAnalgesiaData(analgesia),

                    isS1In20Left = isSacralSensoryInTime(analgesiaData, s1Value, 20, Position.LEFT),
                    isS1In20Right = isSacralSensoryInTime(analgesiaData, s1Value, 20, Position.RIGHT),

                    isS2In20Left = isSacralSensoryInTime(analgesiaData, s2Value, 20, Position.LEFT),
                    isS2In20Right = isSacralSensoryInTime(analgesiaData, s2Value, 20, Position.RIGHT),

                    isS1In30Left = isSacralSensoryInTime(analgesiaData, s1Value, 30, Position.LEFT),
                    isS1In30Right = isSacralSensoryInTime(analgesiaData, s1Value, 30, Position.RIGHT),

                    isS2In30Left = isSacralSensoryInTime(analgesiaData, s2Value, 30, Position.LEFT),
                    isS2In30Right = isSacralSensoryInTime(analgesiaData, s2Value, 30, Position.RIGHT);

                result.isVasLessThan1In20 = formatBoolean(isVasLessThan1(analgesiaData, 20));
                result.isVasLessThan1In30 = formatBoolean(isVasLessThan1(analgesiaData, 30));
                result.timePointOfVasLessThan1 = formatNumber(getTimePointOfVasLessThan1(analgesiaData));
                result.isAdequatePainReliefIn0 = formatBoolean(isAdequatePainRelief(analgesiaData, 0));
                result.isAdequatePainReliefIn2 = formatBoolean(isAdequatePainRelief(analgesiaData, 2));
                result.isAdequatePainReliefIn4 = formatBoolean(isAdequatePainRelief(analgesiaData, 4));
                result.isAdequatePainReliefIn6 = formatBoolean(isAdequatePainRelief(analgesiaData, 6));
                result.isAdequatePainReliefIn8 = formatBoolean(isAdequatePainRelief(analgesiaData, 8));
                result.isAdequatePainReliefIn10 = formatBoolean(isAdequatePainRelief(analgesiaData, 10));
                result.isAdequatePainReliefIn12 = formatBoolean(isAdequatePainRelief(analgesiaData, 12));
                result.isAdequatePainReliefIn14 = formatBoolean(isAdequatePainRelief(analgesiaData, 14));
                result.isAdequatePainReliefIn16 = formatBoolean(isAdequatePainRelief(analgesiaData, 16));
                result.isAdequatePainReliefIn18 = formatBoolean(isAdequatePainRelief(analgesiaData, 18));
                result.isAdequatePainReliefIn20 = formatBoolean(isAdequatePainRelief(analgesiaData, 20));
                result.isAdequatePainReliefIn30 = formatBoolean(isAdequatePainRelief(analgesiaData, 30));
                result.isS1In20Left = formatBoolean(isS1In20Left);
                result.isS1In20Right = formatBoolean(isS1In20Right);
                result.isS1In20Both = formatBoolean(isS1In20Left && isS1In20Right);
                result.isS2In20Left = formatBoolean(isS2In20Left);
                result.isS2In20Right = formatBoolean(isS2In20Right);
                result.isS2In20Both = formatBoolean(isS2In20Left && isS2In20Right);
                result.isS1In30Left = formatBoolean(isS1In30Left);
                result.isS1In30Right = formatBoolean(isS1In30Right);
                result.isS1In30Both = formatBoolean(isS1In30Left && isS1In30Right);
                result.isS2In30Left = formatBoolean(isS2In30Left);
                result.isS2In30Right = formatBoolean(isS2In30Right);
                result.isS2In30Both = formatBoolean(isS2In30Left && isS2In30Right);
                result.vasIn120 = formatNumber(getVasScore(analgesiaData, 120));
                result.vasIn210 = formatNumber(getVasScore(analgesiaData, 210));
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
                result.isUnilateralSensoryBlock = formatBoolean(isUnilateralSensoryBlock(analgesiaData));
                result.timePointOfT8 = formatNumber(getTimePointOfThoracicSensoryBlock(analgesiaData, t8Value));
                result.timePointOfT10 = formatNumber(getTimePointOfThoracicSensoryBlock(analgesiaData, t10Value));
                result.timePointOfS1 = formatNumber(getTimePointOfSacralSensoryBlock(analgesiaData, s1Value));
                result.timePointOfS2 = formatNumber(getTimePointOfSacralSensoryBlock(analgesiaData, s2Value));
                result.isFetalHeartRateDecreased = formatBoolean(isFetalHeartRateDecreased(analgesiaData));

            }

            if (observal) {

                const {
                        pcaCount, manualBolusCount, hasEpiduralCatheterAdjuestment, hasEpiduralCatheterReplacement,
                        isUnabledToPunctureDura, isIVEpiduralCatheterInsertion, isIntrathecalEpiduralCatheterInsertion,
                        durationOfFirstStageOfLabor, durationOfSecondStageOfLabor, hasCaesareanSection, hasInstrumental,
                        hasLateralEpisiotomy, lateralEpisiotomyVasScore, hasPrenatalFever, prenatalFeverTemperature,
                        hasHypotension, hasVasoactiveAgent, hasNausea, hasVomit, hasPruritus,
                        hasPostduralPunctureHeadache, hasBackPain, hasParesthesia, patientSatisfactionScore,
                        bloodLose, foetalWeight, foetalHeight, foetalGender, oneMinuteApgarScore, fiveMinuteApgarScore,
                        hasNicu, nicuReason, arterialPh, arterialBe, venousPh, venousBe, description
                    } = observal,

                    durationOfFirstPcaTime = getDurationOfFirstPcaTime(observal),
                    durationOfFirstManualBolusTime = getDurationOfFirstManualBolusTime(observal),
                    durationOfAnalgesia = getDurationOfAnalgesia(observal),
                    anestheticsConsumption = getAnestheticsConsumption(observal),
                    ropivacaineConsumption = getRopivacaineConsumption(observal),
                    sufentanilConsumption = getSufentanilConsumption(observal);

                result.pcaCount = formatNumber(pcaCount);
                result.durationOfFirstPcaTime = formatNumber(durationOfFirstPcaTime);
                result.manualBolusCount = formatNumber(manualBolusCount);
                result.durationOfFirstManualBolusTime = formatNumber(durationOfFirstManualBolusTime);
                result.hasEpiduralCatheterAdjuestment = formatBoolean(hasEpiduralCatheterAdjuestment);
                result.hasEpiduralCatheterReplacement = formatBoolean(hasEpiduralCatheterReplacement);
                result.isUnabledToPunctureDura = formatBoolean(isUnabledToPunctureDura);
                result.isIVEpiduralCatheterInsertion = formatBoolean(isIVEpiduralCatheterInsertion);
                result.isIntrathecalEpiduralCatheterInsertion = formatBoolean(isIntrathecalEpiduralCatheterInsertion);
                result.durationOfAnalgesia = formatNumber(durationOfAnalgesia);
                result.anestheticsConsumption = formatNumber(
                    anestheticsConsumption !== null ?
                        anestheticsConsumption.toFixed(2)
                        :
                        null
                );
                result.ropivacaineConsumption = formatNumber(
                    ropivacaineConsumption !== null ?
                        ropivacaineConsumption.toFixed(2)
                        :
                        null
                );
                result.sufentanilConsumption = formatNumber(
                    sufentanilConsumption !== null ?
                        sufentanilConsumption.toFixed(2)
                        :
                        null
                );
                result.durationOfFirstStageOfLabor = formatNumber(durationOfFirstStageOfLabor);
                result.durationOfSecondStageOfLabor = formatNumber(durationOfSecondStageOfLabor);
                result.anestheticsConsumptionPerTime = anestheticsConsumption !== null && durationOfAnalgesia !== null ?
                    (anestheticsConsumption / durationOfAnalgesia * 60).toFixed(1)
                    :
                    null;
                result.ropivacaineConsumptionPerTime = ropivacaineConsumption !== null && durationOfAnalgesia !== null ?
                    (ropivacaineConsumption / durationOfAnalgesia * 60).toFixed(1)
                    :
                    null;
                result.sufentanilConsumptionPerTime = sufentanilConsumption !== null && durationOfAnalgesia !== null ?
                    (sufentanilConsumption / durationOfAnalgesia * 60).toFixed(1)
                    :
                    null;
                result.hasCaesareanSection = formatBoolean(hasCaesareanSection);
                result.hasInstrumental = formatBoolean(hasInstrumental);
                result.hasLateralEpisiotomy = formatBoolean(hasLateralEpisiotomy);
                result.lateralEpisiotomyVasScore = formatNumber(lateralEpisiotomyVasScore);
                result.hasPrenatalFever = formatBoolean(hasPrenatalFever);
                result.prenatalFeverTemperature = formatNumber(prenatalFeverTemperature);
                result.hasHypotension = formatBoolean(hasHypotension);
                result.hasVasoactiveAgent = formatBoolean(hasVasoactiveAgent);
                result.hasNausea = formatBoolean(hasNausea);
                result.hasVomit = formatBoolean(hasVomit);
                result.hasPruritus = formatBoolean(hasPruritus);
                result.hasPostduralPunctureHeadache = formatBoolean(hasPostduralPunctureHeadache);
                result.hasBackPain = formatBoolean(hasBackPain);
                result.hasParesthesia = formatBoolean(hasParesthesia);
                result.patientSatisfactionScore = formatNumber(
                    patientSatisfactionScore !== null ?
                        patientSatisfactionScore * 10
                        :
                        ''
                );
                result.bloodLose = formatNumber(bloodLose);
                result.foetalWeight = formatNumber(foetalWeight);
                result.foetalHeight = formatNumber(foetalHeight);
                result.foetalGender = formatNumber(foetalGender);
                result.oneMinuteApgarScore = formatNumber(oneMinuteApgarScore);
                result.fiveMinuteApgarScore = formatNumber(fiveMinuteApgarScore);
                result.hasNicu = formatBoolean(hasNicu);
                result.nicuReason = nicuReason;
                result.arterialPh = formatNumber(arterialPh);
                result.arterialBe = formatNumber(arterialBe);
                result.venousPh = formatNumber(venousPh);
                result.venousBe = formatNumber(venousBe);
                description && result.desc.push(description);
            }

            result.desc = result.desc.join('，');

            return header.map(item => result[item?.key] || null);

        });

    excelData.unshift(header.map(item => item?.name));

    return excelData;

}

/**
 * 获取导出的平均 VAS 部分的数据
 * @param data
 * @returns {Promise<(*|null)[][]>}
 */
export async function getExportMeanVAS(data) {

    data = data || await getFullPatients();

    const header = [
            {name: '组别', key: 'groupName'},
            {name: '姓名', key: 'name'},
            {name: '住院号', key: 'id'},
            {name: '0min时VAS评分', key: 'vasIn0'},
            {name: '2min时VAS评分', key: 'vasIn2'},
            {name: '4min时VAS评分', key: 'vasIn4'},
            {name: '6min时VAS评分', key: 'vasIn6'},
            {name: '8min时VAS评分', key: 'vasIn8'},
            {name: '10min时VAS评分', key: 'vasIn10'},
            {name: '12min时VAS评分', key: 'vasIn12'},
            {name: '14min时VAS评分', key: 'vasIn14'},
            {name: '16min时VAS评分', key: 'vasIn16'},
            {name: '18min时VAS评分', key: 'vasIn18'},
            {name: '20min时VAS评分', key: 'vasIn20'},
            {name: '30min时VAS评分', key: 'vasIn30'}
        ],

        excelData = data.filter(item => item?.status).map(item => {

            if (!item) {
                return null;
            }

            const {id, name, group, analgesia} = item,

                result = {
                    id,
                    name,
                    groupName: group?.name || ''
                };

            if (analgesia) {

                const analgesiaData = fullFillAnalgesiaData(analgesia);

                result.vasIn0 = formatNumber(getVasScore(analgesiaData, 0));
                result.vasIn2 = formatNumber(getVasScore(analgesiaData, 2));
                result.vasIn4 = formatNumber(getVasScore(analgesiaData, 4));
                result.vasIn6 = formatNumber(getVasScore(analgesiaData, 6));
                result.vasIn8 = formatNumber(getVasScore(analgesiaData, 8));
                result.vasIn10 = formatNumber(getVasScore(analgesiaData, 10));
                result.vasIn12 = formatNumber(getVasScore(analgesiaData, 12));
                result.vasIn14 = formatNumber(getVasScore(analgesiaData, 14));
                result.vasIn16 = formatNumber(getVasScore(analgesiaData, 16));
                result.vasIn18 = formatNumber(getVasScore(analgesiaData, 18));
                result.vasIn20 = formatNumber(getVasScore(analgesiaData, 20));
                result.vasIn30 = formatNumber(getVasScore(analgesiaData, 30));

            }

            return header.map(item => result[item?.key] || null);

        });

    excelData.unshift(header.map(item => item?.name));

    return excelData;

}

/**
 * 获取导出的宫缩平均 VAS 部分的数据
 * @param data
 * @returns {Promise<(*|null)[][]>}
 */
export async function getExportMeanVASWithContraction(data) {

    data = data || await getFullPatients();

    const header = [
            {name: '组别', key: 'groupName'},
            {name: '姓名', key: 'name'},
            {name: '住院号', key: 'id'},
            {name: '0min时有宫缩的VAS评分', key: 'vasIn0'},
            {name: '2min时有宫缩的VAS评分', key: 'vasIn2'},
            {name: '4min时有宫缩的VAS评分', key: 'vasIn4'},
            {name: '6min时有宫缩的VAS评分', key: 'vasIn6'},
            {name: '8min时有宫缩的VAS评分', key: 'vasIn8'},
            {name: '10min时有宫缩的VAS评分', key: 'vasIn10'},
            {name: '12min时有宫缩的VAS评分', key: 'vasIn12'},
            {name: '14min时有宫缩的VAS评分', key: 'vasIn14'},
            {name: '16min时有宫缩的VAS评分', key: 'vasIn16'},
            {name: '18min时有宫缩的VAS评分', key: 'vasIn18'},
            {name: '20min时有宫缩的VAS评分', key: 'vasIn20'},
            {name: '30min时有宫缩的VAS评分', key: 'vasIn30'}
        ],

        excelData = data.filter(item => item?.status).map(item => {

            if (!item) {
                return null;
            }

            const {id, group, name, analgesia} = item,

                result = {
                    groupName: group?.name || '',
                    name: name,
                    id: id
                };

            if (analgesia) {

                const analgesiaData = fullFillAnalgesiaData(analgesia);

                result.vasIn0 = formatNumber(getVasScoreWithContraction(analgesiaData, 0));
                result.vasIn2 = formatNumber(getVasScoreWithContraction(analgesiaData, 2));
                result.vasIn4 = formatNumber(getVasScoreWithContraction(analgesiaData, 4));
                result.vasIn6 = formatNumber(getVasScoreWithContraction(analgesiaData, 6));
                result.vasIn8 = formatNumber(getVasScoreWithContraction(analgesiaData, 8));
                result.vasIn10 = formatNumber(getVasScoreWithContraction(analgesiaData, 10));
                result.vasIn12 = formatNumber(getVasScoreWithContraction(analgesiaData, 12));
                result.vasIn14 = formatNumber(getVasScoreWithContraction(analgesiaData, 14));
                result.vasIn16 = formatNumber(getVasScoreWithContraction(analgesiaData, 16));
                result.vasIn18 = formatNumber(getVasScoreWithContraction(analgesiaData, 18));
                result.vasIn20 = formatNumber(getVasScoreWithContraction(analgesiaData, 20));
                result.vasIn30 = formatNumber(getVasScoreWithContraction(analgesiaData, 30));

            }

            return header.map(item => result[item.key] || null);

        });

    excelData.unshift(header.map(item => item?.name));

    return excelData;

}

/**
 * 获取导出的平均 VAS 部分的数据
 * @param data
 * @returns {Promise<(*|null)[][]>}
 */
export async function getExportLaterMeanVAS(data) {

    data = data || await getFullPatients();

    const header = [
            {name: '组别', key: 'groupName'},
            {name: '姓名', key: 'name'},
            {name: '住院号', key: 'id'},
            {name: '30min时VAS评分', key: 'vasIn30'},
            {name: '2h时VAS评分', key: 'vasIn120'},
            {name: '3.5h时VAS评分', key: 'vasIn210'},
            {name: '5h时VAS评分', key: 'vasIn300'}
        ],

        excelData = data.filter(item => item?.status).map(item => {

            if (!item) {
                return null;
            }

            const {id, name, group, analgesia} = item,

                result = {
                    id,
                    name,
                    groupName: group?.name || ''
                };

            if (analgesia) {

                const analgesiaData = fullFillAnalgesiaData(analgesia);

                result.vasIn30 = formatNumber(getVasScore(analgesiaData, 30));
                result.vasIn120 = formatNumber(getVasScore(analgesiaData, 120));
                result.vasIn210 = formatNumber(getVasScore(analgesiaData, 210));
                result.vasIn300 = formatNumber(getVasScore(analgesiaData, 300));

            }

            return header.map(item => result[item?.key] || null);

        });

    excelData.unshift(header.map(item => item?.name));

    return excelData;

}

/**
 * 获取导出的所有数据
 * @param data
 * @param sensoryBlocks
 * @returns {Promise<{meanVASData: (*|null)[][], laterMeanVASData: (*|null)[][], meanVASWithContractionData: (*|null)[][], dpeData: (*|null)[][]}>}
 */
export async function getExportData(data, sensoryBlocks) {

    data = data || await getFullPatients();
    sensoryBlocks = sensoryBlocks || await getSensoryBlocks();

    return {
        dpeData: await getExportDPEData(data, sensoryBlocks),
        meanVASData: await getExportMeanVAS(data),
        meanVASWithContractionData: await getExportMeanVASWithContraction(data),
        laterMeanVASData: await getExportLaterMeanVAS(data)
    };

}

export default {
    getExportDPEData,
    getExportMeanVAS,
    getExportMeanVASWithContraction,
    getExportData
};
