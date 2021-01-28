/**
 * @file SensoryBlockService.js
 */

// Daos
import {getSensoryBlocks} from '../dao/SensoryBlockDao.js';

// Vendors
import {buildSuccess} from '../utils/Response.js';

/**
 * 获取所有 Sensory Blocks 数据
 * @returns {Promise<string>}
 */
export async function getSensoryBlocks() {
    return buildSuccess(await getSensoryBlocks());
};

export default {
    getSensoryBlocks
};
