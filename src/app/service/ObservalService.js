/**
 * @file ObservalService.js
 */

// Daos
import {
    getObservalDataByPatientId,
    isObservalDataExist,
    createObservalData,
    updateObservalData,
    createOrUpdateObservalData
} from '../dao/ObservalDao.js';

// Vendors
import {
    buildSuccess,
    buildError
} from '../utils/Response.js';

/**
 * 获取某个 Patient ID 的 Observal 数据
 * @param patientId
 * @returns {Promise<string>}
 */
export async function getObservalDataByPatientId(patientId) {
    return buildSuccess(await getObservalDataByPatientId(patientId));
};

/**
 * 创建一条 Observal 数据
 *  data: {
 *      patientId: String
 *      observalData: Object
 *  }
 * @param data
 * @returns {Promise<*>}
 */
export async function createObservalData(patientId, data) {

    if (await isObservalDataExist(patientId)) {
        return buildError(`Patient ID ${patientId} Observal Data is exist.`);
    }

    let result;

    try {
        result = await createObservalData({
            ...data,
            patientId
        });
    } catch (e) {
        return buildError('Add Observal Data failure.');
    }

    return buildSuccess(result);

};

/**
 * 更新一条 Observal 数据
 *  data: {
 *      patientId: String
 *      observalData: Object
 *  }
 * @param data
 * @returns {Promise<*>}
 */
export async function updateObservalData(patientId, data) {

    if (!await isObservalDataExist(patientId)) {
        return buildError(`Patient ID ${patientId} Observal Data is not exist.`);
    }

    let result;

    try {
        result = await updateObservalData({
            ...data,
            patientId
        });
    } catch (e) {
        return buildError('Update Observal Data failure.');
    }

    return buildSuccess(result);

};

/**
 * 创建或更新一条 Observal 数据
 *  data: {
 *      patientId: String
 *      observalData: Object
 *  }
 * @param data
 * @returns {Promise<*>}
 */
export async function createOrUpdateObservalData(patientId, data) {

    let result;

    try {
        result = await createOrUpdateObservalData({
            ...data,
            patientId
        });
    } catch (e) {
        return buildError('Update Observal Data failure.');
    }

    return buildSuccess(result);

};

export default {

    getObservalDataByPatientId,

    createObservalData,
    updateObservalData,
    createOrUpdateObservalData

};
