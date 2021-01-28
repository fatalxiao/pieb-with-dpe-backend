/**
 * @file EPPlacementPointService.js
 */

// Daos
import EPPlacementPointDao from '../dao/EPPlacementPointDao.js';

// Vendors
import {buildSuccess} from '../utils/Response.js';

/**
 * 获取所有的 EP Placement Points 数据
 * @returns {Promise<string>}
 */
export async function getEPPlacementPoints() {
    return buildSuccess(await EPPlacementPointDao.getEPPlacementPoints());
};

export default {
    getEPPlacementPoints
};
