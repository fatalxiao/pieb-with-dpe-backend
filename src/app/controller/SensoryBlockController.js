import SensoryBlockService from '../service/SensoryBlockService.js';
import {Api, GetMapping} from '../utils/ApiDecorator';

@Api({tags: 'SensoryBlock'})
class SensoryBlockController {

    @GetMapping({value: '/dpe/sensoryBlock/getSensoryBlocks'})
    static async getSensoryBlocks(ctx) {
        ctx.response.body = await SensoryBlockService.getSensoryBlocks();
    }

};

export default SensoryBlockController;
