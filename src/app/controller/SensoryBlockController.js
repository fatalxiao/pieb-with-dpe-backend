/**
 * @file SensoryBlockController.js
 */

// Services
import SensoryBlockService from '../service/SensoryBlockService.js';

// Decorators
import {Api, GetMapping} from '../utils/ApiDecorator';

// Statics
import {baseUrl} from '../../config';

@Api({tags: 'SensoryBlock'})
class SensoryBlockController {

    @GetMapping({value: `${baseUrl}/sensoryBlock/getSensoryBlocks`})
    static async getSensoryBlocks(ctx) {
        ctx.response.body = await SensoryBlockService.getSensoryBlocks();
    }

};

export default SensoryBlockController;
