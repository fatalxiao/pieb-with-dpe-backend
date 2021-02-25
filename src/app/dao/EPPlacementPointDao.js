/**
 * @file EPPlacementPointDao.js
 */

// Models
import EPPlacementPoint from '../model/EPPlacementPointModel.js';

/**
 * 获取所有的 EP Placement Points 数据
 * @returns {Promise}
 */
export async function getEPPlacementPoints() {
    return await EPPlacementPoint.findAll();
}

export default {
    getEPPlacementPoints
};
