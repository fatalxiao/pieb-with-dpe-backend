/**
 * @file AnalgesiaService.js
 */

// Daos
import AnalgesiaDao from '../dao/AnalgesiaDao.js';

// Vendors
import {
    buildSuccess,
    buildError
} from '../utils/Response.js';

/**
 * 获取某个 Patient ID 的 Analgesia 数据
 * @param patientId
 * @returns {Promise<string>}
 */
export async function getAnalgesiaDataByPatientId(patientId) {
    return buildSuccess(await AnalgesiaDao.getAnalgesiaDataByPatientId(patientId));
}

/**
 * 创建一批 Analgesia 数据
 *  data: {
 *      patientId: String
 *      analgesiaData: Array
 *  }
 *
 * @param patientId
 * @param data
 * @returns {Promise<*>}
 */
export async function createAnalgesiaData(patientId, data) {

    const error = [];

    for (let item of data) {

        const analgesiaData = {
            ...item,
            patientId
        };

        if (await AnalgesiaDao.isAnalgesiaDataExist(patientId, analgesiaData.timePoint)) {
            error.push(`Patient ID ${patientId}, timePoint ${analgesiaData.timePoint} data is exist.`);
            continue;
        }

        try {
            await AnalgesiaDao.createAnalgesiaData(analgesiaData);
        } catch (e) {
            error.push(`Patient ID ${patientId}, timePoint ${analgesiaData.timePoint} create failure.`);
        }

    }

    if (error.length > 0) {
        return buildError(error.join(' '));
    }

    return buildSuccess(data.length);

}

/**
 * 更新一批 Analgesia 数据
 *  data: {
 *      patientId: String
 *      analgesiaData: Array
 *  }
 *
 * @param patientId
 * @param data
 * @returns {Promise<*>}
 */
export async function updateAnalgesiaData(patientId, data) {

    const error = [];

    for (let item of data) {

        const analgesiaData = {
            ...item,
            patientId
        };

        if (!await AnalgesiaDao.isAnalgesiaDataExist(patientId, analgesiaData.timePoint)) {
            error.push(`Patient ID ${patientId}, timePoint ${analgesiaData.timePoint} data is not exist.`);
            continue;
        }

        try {
            await AnalgesiaDao.updateAnalgesiaData(analgesiaData);
        } catch (e) {
            error.push(`Patient ID ${patientId}, timePoint ${analgesiaData.timePoint} update failure.`);
        }

    }

    if (error.length > 0) {
        return buildError(error.join(' '));
    }

    return buildSuccess(data.length);

}

/**
 * 创建或更新一批 Analgesia 数据
 *  data: {
 *      patientId: String
 *      analgesiaData: Array
 *  }
 *
 * @param patientId
 * @param data
 * @returns {Promise<*>}
 */
export async function createOrUpdateAnalgesiaData(patientId, data) {

    const error = [];

    for (let item of data) {

        const analgesiaData = {
            ...item,
            patientId
        };

        try {
            await AnalgesiaDao.createOrUpdateAnalgesiaData(analgesiaData);
        } catch (e) {
            error.push(`Patient ID ${patientId}, timePoint ${analgesiaData.timePoint} update failure.`);
        }

    }

    if (error.length > 0) {
        return buildError(error.join(' '));
    }

    return buildSuccess(data.length);

}

export default {

    getAnalgesiaDataByPatientId,

    createAnalgesiaData,
    updateAnalgesiaData,
    createOrUpdateAnalgesiaData

};
