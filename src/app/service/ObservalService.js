/**
 * @file ObservalService.js
 */

// Daos
import ObservalDao from '../dao/ObservalDao.js';

// Vendors
import Response from '../utils/Response.js';

/**
 * 获取某个 Patient ID 的 Observal 数据
 * @param patientId
 * @returns {Promise<string>}
 */
export async function getObservalDataByPatientId(patientId) {
    return Response.buildSuccess(await ObservalDao.getObservalDataByPatientId(patientId));
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

    if (await ObservalDao.isObservalDataExist(patientId)) {
        return Response.buildError(`Patient ID ${patientId} Observal Data is exist.`);
    }

    let result;

    try {
        result = await ObservalDao.createObservalData({
            ...data,
            patientId
        });
    } catch (e) {
        return Response.buildError('Add Observal Data failure.');
    }

    return Response.buildSuccess(result);

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

    if (!await ObservalDao.isObservalDataExist(patientId)) {
        return Response.buildError(`Patient ID ${patientId} Observal Data is not exist.`);
    }

    let result;

    try {
        result = await ObservalDao.updateObservalData({
            ...data,
            patientId
        });
    } catch (e) {
        return Response.buildError('Update Observal Data failure.');
    }

    return Response.buildSuccess(result);

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
        result = await ObservalDao.createOrUpdateObservalData({
            ...data,
            patientId
        });
    } catch (e) {
        return Response.buildError('Update Observal Data failure.');
    }

    return Response.buildSuccess(result);

};

export default {

    getObservalDataByPatientId,

    createObservalData,
    updateObservalData,
    createOrUpdateObservalData

};
