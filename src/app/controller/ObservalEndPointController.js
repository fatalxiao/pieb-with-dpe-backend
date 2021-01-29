/**
 * @file ObservalEndPointController.js
 */

// Services
import ObservalEndPointService from '../service/ObservalEndPointService.js';

// Decorators
import {Api, GetMapping} from '../utils/ApiDecorator.js';

// Statics
import {baseUrl} from '../../config';

@Api({tags: 'ObservalEndPoint'})
class ObservalEndPointController {

    /**
     * 获取所有 groups 的数据
     * @param ctx
     * @returns {Promise<void>}
     */
    @GetMapping({value: `${baseUrl}/observalEndPoint/getObservalEndPoints`})
    static async getObservalEndPoints(ctx) {
        ctx.response.body = await ObservalEndPointService.getObservalEndPoints();
    }

};

export default ObservalEndPointController;
