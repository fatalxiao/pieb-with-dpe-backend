/**
 * @file AnalgesiaDao.js
 */

// Models
import Group from '../model/GroupModel.js';

/**
 * 获取所有的 groups 数据
 * @returns {Promise<Model<any, TModelAttributes>[]>}
 */
export async function getGroups() {
    return await Group.findAll();
}

export default {
    getGroups
};
