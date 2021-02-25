/**
 * @file ObservalEndPointService.js
 */

// Daos
import ObservalEndPointDao from '../dao/ObservalEndPointDao.js';

// Vendors
import {buildSuccess} from '../utils/Response.js';

/**
 * 获取所有的 Observal End Points 数据
 * @returns {Promise<string>}
 */
export async function getObservalEndPoints() {
    return buildSuccess(await ObservalEndPointDao.getObservalEndPoints());
}

export default {
    getObservalEndPoints
};
