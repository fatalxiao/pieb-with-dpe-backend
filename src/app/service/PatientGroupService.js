/**
 * @file PatientGroupService.js
 */

// Daos
import PatientGroupDao from '../dao/PatientGroupDao.js';

// Vendors
import {buildSuccess} from '../utils/Response.js';

/**
 * 获取所有 patient groups 的数据
 * @returns {Promise<string>}
 */
export async function getPatientGroups() {
    return buildSuccess(await PatientGroupDao.getPatientGroups());
};

export default {
    getPatientGroups
};
