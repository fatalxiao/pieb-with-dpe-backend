/**
 * @file ObservalDao.js
 */

import Sequelize from 'sequelize';

// Models
import Observal from '../model/ObservalModel.js';
import EPPlacementPoint from '../model/EPPlacementPointModel';
import ObservalEndPoint from '../model/ObservalEndPointModel';

/**
 * 获取某个 patient ID 的 Observal 数据
 * @param patientId
 * @returns {Promise}
 */
export async function getObservalDataByPatientId(patientId) {
    return await Observal.findOne({
        where: {
            patientId: {
                [Sequelize.Op.eq]: patientId
            }
        },
        include: [{
            model: EPPlacementPoint,
            as: 'epPlacementPoint',
            required: false
        }, {
            model: ObservalEndPoint,
            as: 'observalEndPoint',
            required: false
        }]
    });
}

/**
 * 是否存在某个 patient ID 的 Observal 数据
 * @param patientId
 * @returns {Promise<boolean>}
 */
export async function isObservalDataExist(patientId) {
    return await Observal.count({
        where: {
            patientId: {
                [Sequelize.Op.eq]: patientId
            }
        }
    }) > 0;
}

/**
 * 创建一条 Observal 数据
 * @param data
 * @returns {Promise<void>}
 */
export async function createObservalData(data) {
    return Observal.create(data);
}

/**
 * 更新一条 Observal 数据
 * @param data
 * @returns {Promise}
 */
export async function updateObservalData(data) {
    return await Observal.update(data, {
        where: {
            patientId: {
                [Sequelize.Op.eq]: data.patientId
            }
        }
    });
}

/**
 * 创建或更新一条 Observal 数据
 * @param data
 * @returns {Promise}
 */
export async function createOrUpdateObservalData(data) {
    if (await isObservalDataExist(data.patientId)) {
        return updateObservalData(data);
    } else {
        return createObservalData(data);
    }
}

export default {

    getObservalDataByPatientId,

    isObservalDataExist,

    createObservalData,
    updateObservalData,
    createOrUpdateObservalData

};
