/**
 * @file GroupController.js
 */

// Services
import {getGroups} from '../service/GroupService.js';

// Vendors
import {Api, GetMapping} from '../utils/ApiDecorator.js';

@Api({tags: 'Group'})
class GroupController {

    /**
     * 获取所有 groups 的数据
     * @param ctx
     * @returns {Promise<void>}
     */
    @GetMapping({value: '/dpe/group/getGroups'})
    static async getGroups(ctx) {
        ctx.response.body = await getGroups();
    }

};

export default GroupController;
