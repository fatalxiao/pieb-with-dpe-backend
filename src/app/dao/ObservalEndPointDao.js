/**
 * @file ObservalEndPointDao.js
 */

// Models
import ObservalEndPoint from '../model/ObservalEndPointModel.js';

/**
 * 获取所有的 Observal End Points 数据
 * @returns {Promise<Model<any, TModelAttributes>[]>}
 */
export async function getObservalEndPoints() {
    return await ObservalEndPoint.findAll();
}

export default {
    getObservalEndPoints
};
