/**
 * @file AnalgesiaDao.js
 */

import Sequelize from 'sequelize';

// Models
import Analgesia from '../model/AnalgesiaModel';
import SensoryBlock from '../model/SensoryBlockModel';

/**
 * 根据 patient ID 获取 Analgesia 数据
 * @param patientId
 * @returns {Promise}
 */
export async function getAnalgesiaDataByPatientId(patientId) {
    return await Analgesia.findAll({
        where: {
            patientId: {[Sequelize.Op.eq]: patientId}
        },
        include: [{
            model: SensoryBlock,
            as: 'thoracicSensoryBlockLeft',
            where: {
                type: {[Sequelize.Op.eq]: 1}
            },
            required: false
        }, {
            model: SensoryBlock,
            as: 'thoracicSensoryBlockRight',
            where: {
                type: {[Sequelize.Op.eq]: 1}
            },
            required: false
        }, {
            model: SensoryBlock,
            as: 'sacralSensoryBlockLeft',
            where: {
                type: {[Sequelize.Op.eq]: 2}
            },
            required: false
        }, {
            model: SensoryBlock,
            as: 'sacralSensoryBlockRight',
            where: {
                type: {[Sequelize.Op.eq]: 2}
            },
            required: false
        }]
    });
}

/**
 * 是否存在 patient ID 的数据
 * @param patientId
 * @param timePoint
 * @returns {Promise<boolean>}
 */
export async function isAnalgesiaDataExist(patientId, timePoint) {
    return await Analgesia.count({
        where: {
            patientId: {[Sequelize.Op.eq]: patientId},
            timePoint: {[Sequelize.Op.eq]: timePoint}
        }
    }) > 0;
}

/**
 * 创建一条 Analgesia 数据
 * @param data
 * @returns {Promise<data>}
 */
export async function createAnalgesiaData(data) {
    return Analgesia.create(data);
}

/**
 * 更新一条 Analgesia 数据
 * @param data
 * @returns {Promise}
 */
export async function updateAnalgesiaData(data) {
    return await Analgesia.update(data, {
        where: {
            patientId: {[Sequelize.Op.eq]: data.patientId},
            timePoint: {[Sequelize.Op.eq]: data.timePoint}
        }
    });
}

/**
 * 更新或创建一条 Analgesia 数据
 * @param data
 * @returns {Promise}
 */
export async function createOrUpdateAnalgesiaData(data) {
    if (await isAnalgesiaDataExist(data.patientId, data.timePoint)) {
        return updateAnalgesiaData(data);
    } else {
        return createAnalgesiaData(data);
    }
}

export default {

    getAnalgesiaDataByPatientId,

    isAnalgesiaDataExist,

    createAnalgesiaData,
    updateAnalgesiaData,
    createOrUpdateAnalgesiaData

};
