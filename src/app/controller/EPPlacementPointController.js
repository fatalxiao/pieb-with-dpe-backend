/**
 * @file EPPlacementPointController.js
 */

// Services
import EPPlacementPointService from '../service/EPPlacementPointService.js';

// Decorators
import {Api, GetMapping} from '../utils/ApiDecorator.js';

@Api({tags: 'EPPlacementPoint'})
class EPPlacementPointController {

    /**
     * 获取所有的 EP Placement Points 数据
     * @param ctx
     * @returns {Promise<void>}
     */
    @GetMapping({value: '/dpe/epPlacementPoint/getEPPlacementPoints'})
    static async getEPPlacementPoints(ctx) {
        ctx.response.body = await EPPlacementPointService.getEPPlacementPoints();
    }

};

export default EPPlacementPointController;
