/**
 * @file PatientGroupController.js
 */

// Services
import PatientGroupService from '../service/PatientGroupService.js';

// Decorators
import {Api, GetMapping} from '../utils/ApiDecorator.js';

// Statics
import {baseUrl} from '../../config';

@Api({tags: 'PatientGroup'})
class PatientGroupController {

    /**
     * 获取所有 patient groups 的数据
     * @param ctx
     * @returns {Promise<void>}
     */
    @GetMapping({value: `${baseUrl}/patientGroup/getPatientGroups`})
    static async getPatientGroups(ctx) {
        ctx.response.body = await PatientGroupService.getPatientGroups();
    }

};

export default PatientGroupController;
