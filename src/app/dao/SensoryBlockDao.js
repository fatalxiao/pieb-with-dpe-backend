/**
 * @file SensoryBlockDao.js
 */

// Models
import SensoryBlock from '../model/SensoryBlockModel.js';

/**
 * 获取所有 Sensory Blocks 数据
 * @returns {Promise<Model<any, TModelAttributes>[]>}
 */
export async function getSensoryBlocks() {
    return await SensoryBlock.findAll();
}

export default {
    getSensoryBlocks
};
