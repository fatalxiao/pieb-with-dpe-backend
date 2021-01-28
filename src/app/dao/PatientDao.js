/**
 * @file PatientDao.js
 */

import Sequelize from 'sequelize';

// Models
import PatientModel from '../model/PatientModel.js';
import Group from '../model/GroupModel.js';

/**
 * 获取用于列表的 Patients 数据
 * @returns {Promise<Model<any, TModelAttributes>[]>}
 */
export async function getPatients() {
    return await PatientModel.findAll({
        order: [
            ['ctime', 'DESC']
        ],
        include: [{
            model: Group,
            as: 'group',
            where: {id: Sequelize.col('patients.group_id')}
        }]
    });
}

/**
 * 获取完全的 Patients 数据
 * @returns {Promise<Model<any, TModelAttributes>[]>}
 */
export async function getFullPatients() {
    return await PatientModel.findAll({
        order: [
            ['ctime', 'DESC']
        ],
        include: [{all: true}]
    });
}

/**
 * 是否存在 ID 的 Patient 数据
 * @param id
 * @returns {Promise<boolean>}
 */
export async function isPatientExist(id) {
    return await PatientModel.count({
        where: {
            id: {[Sequelize.Op.eq]: id}
        }
    }) > 0;
}

/**
 * 根据 ID 获取 Patient 数据
 * @param id
 * @returns {Promise<Model<any, any>>}
 */
export async function getPatientById(id) {
    return await PatientModel.findOne({
        where: {
            id: {[Sequelize.Op.eq]: id}
        },
        include: [{
            model: Group,
            as: 'group',
            where: {id: Sequelize.col('patients.group_id')}
        }]
    });
}

/**
 * 创建一条 Patient 数据
 * @param data
 * @returns {Promise<void>}
 */
export async function createPatient(data) {
    return await PatientModel.create(data);
}

/**
 * 更新一条 Patient 数据
 * @param data
 * @returns {Promise<[number, Model<any, TModelAttributes>[]]>}
 */
export async function updatePatient(data) {
    return await PatientModel.update(data, {
        where: {
            id: {[Sequelize.Op.eq]: data.id}
        }
    });
}

/**
 * 创建或更新一条 Patient 数据
 * @param data
 * @returns {Promise<Promise<void>|Promise<(number|Model<any, TModelAttributes>[])[]>>}
 */
export async function createOrUpdatePatient(data) {
    if (await isPatientExist(data.id)) {
        return updatePatient(data);
    } else {
        return createPatient(data);
    }
}

/**
 * 启用某个 ID 的 Patient
 * @param id
 * @returns {Promise<[number, Model<any, TModelAttributes>[]]>}
 */
export async function enablePatient(id) {
    return await PatientModel.update({
        status: 1
    }, {
        where: {
            id: {[Sequelize.Op.eq]: id}
        }
    });
}

/**
 * 禁用某个 ID 的 Patient
 * @param id
 * @returns {Promise<[number, Model<any, TModelAttributes>[]]>}
 */
export async function disablePatient(id) {
    return await PatientModel.update({
        status: 0
    }, {
        where: {
            id: {[Sequelize.Op.eq]: id}
        }
    });
}

export default {

    getPatients,
    getFullPatients,

    isPatientExist,

    getPatientById,

    createPatient,
    updatePatient,
    createOrUpdatePatient,

    enablePatient,
    disablePatient

};
