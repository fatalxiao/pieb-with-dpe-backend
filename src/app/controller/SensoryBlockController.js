/**
 * @file SensoryBlockController.js
 */

// Services
import SensoryBlockService from '../service/SensoryBlockService.js';

// Decorators
import {Api, GetMapping} from '../utils/ApiDecorator';

@Api({tags: 'SensoryBlock'})
class SensoryBlockController {

    @GetMapping({value: '/dpe/sensoryBlock/getSensoryBlocks'})
    static async getSensoryBlocks(ctx) {
        ctx.response.body = await SensoryBlockService.getSensoryBlocks();
    }

};

export default SensoryBlockController;
