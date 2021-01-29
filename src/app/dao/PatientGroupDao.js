/**
 * @file PatientGroupDao.js
 */

// Models
import PatientGroup from '../model/PatientGroupModel.js';

/**
 * 获取所有的 patient groups 数据
 * @returns {Promise<Model<any, TModelAttributes>[]>}
 */
export async function getPatientGroups() {
    return await PatientGroup.findAll();
}

export default {
    getPatientGroups
};
