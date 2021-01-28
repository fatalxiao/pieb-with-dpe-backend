/**
 * @file PatientService.js
 */

// Daos
import PatientDao from '../dao/PatientDao.js';

// Vendors
import Response from '../utils/Response.js';

/**
 * 获取用于列表的 Patients 数据
 * @returns {Promise<string>}
 */
export async function getPatients() {
    return Response.buildSuccess(await PatientDao.getPatients());
};

/**
 * 获取完全的 Patients 数据
 * @returns {Promise<string>}
 */
export async function getFullPatients() {
    return Response.buildSuccess(await PatientDao.getFullPatients());
};

/**
 * 根据 ID 获取 Patient 数据
 * @param id
 * @returns {Promise<string>}
 */
export async function getPatientById(id) {
    return Response.buildSuccess(await PatientDao.getPatientById(id));
};

/**
 * 创建一条 Patient 数据
 * @param data
 * @returns {Promise<string>}
 */
export async function createPatient(data) {

    if (await PatientDao.isPatientExist(data.id)) {
        return Response.buildError(`Patient ID ${data.id} is exist.`);
    }

    let result;

    try {
        result = await PatientDao.createPatient(data);
    } catch (e) {
        return Response.buildError('Create Patient failure.');
    }

    return Response.buildSuccess(result);

};

/**
 * 更新一条 Patient 数据
 * @param data
 * @returns {Promise<string>}
 */
export async function updatePatient(data) {

    if (!(await PatientDao.isPatientExist(data.id))) {
        return Response.buildError(`Patient ID ${data.id} is not exist.`);
    }

    let result;

    try {
        result = await PatientDao.updatePatient(data);
    } catch (e) {
        return Response.buildError('Update Patient failure.');
    }

    return Response.buildSuccess(result);

};

/**
 * 创建或更新一条 Patient 数据
 * @param data
 * @returns {Promise<string>}
 */
export async function createOrUpdatePatient(data) {

    let result;

    try {
        result = await PatientDao.createOrUpdatePatient(data);
    } catch (e) {
        return Response.buildError('Update Patient failure.');
    }

    return Response.buildSuccess(result);

};

/**
 * 启用某个 ID 的 Patient
 * @param id
 * @returns {Promise<string>}
 */
export async function enablePatient(id) {

    if (!(await PatientDao.isPatientExist(id))) {
        return Response.buildError(`Patient ID ${id} is not exist.`);
    }

    let result;

    try {
        result = await PatientDao.enablePatient(id);
    } catch (e) {
        return Response.buildError('Enable Patient failure.');
    }

    return Response.buildSuccess(result);

};

/**
 * 禁用某个 ID 的 Patient
 * @param id
 * @returns {Promise<string>}
 */
export async function disablePatient(id) {

    if (!(await PatientDao.isPatientExist(id))) {
        return Response.buildError(`Patient ID ${id} is not exist.`);
    }

    let result;

    try {
        result = await PatientDao.disablePatient(id);
    } catch (e) {
        return Response.buildError('Enable Patient failure.');
    }

    return Response.buildSuccess(result);

};

export default {

    getPatients,
    getFullPatients,

    getPatientById,

    createPatient,
    updatePatient,
    createOrUpdatePatient,

    enablePatient,
    disablePatient

};
