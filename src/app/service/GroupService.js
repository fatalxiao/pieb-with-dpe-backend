/**
 * @file GroupService.js
 */

// Daos
import GroupDao from '../dao/GroupDao.js';

// Vendors
import Response from '../utils/Response.js';

/**
 * 获取所有 groups 的数据
 * @returns {Promise<string>}
 */
export async function getGroups() {
    return Response.buildSuccess(await GroupDao.getGroups());
};

export default {
    getGroups
};
