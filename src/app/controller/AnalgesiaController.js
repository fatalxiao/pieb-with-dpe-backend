/**
 * @file AnalgesiaController.js
 */

// Services
import AnalgesiaService from '../service/AnalgesiaService.js';

// Decorators
import {Api, GetMapping, PostMapping} from '../utils/ApiDecorator';

// Statics
import {baseUrl} from '../../config';

// Vendors
import {buildParamError} from '../utils/Response.js';

@Api({tags: 'Analgesia'})
class AnalgesiaController {

    /**
     * 校验 request 数据
     * @param patientId
     * @param requestData
     * @returns {string}
     */
    static verifyRequestData(patientId, requestData) {

        if (!requestData) {
            return buildParamError('Request Data is required');
        } else if (!patientId) {
            return buildParamError('Patient ID is required');
        } else if (!requestData) {
            return buildParamError('Analgesia Data is required');
        }

    }

    /**
     * 获取某个 Patient ID 的 Analgesia 数据
     * @param ctx
     * @returns {Promise<string>}
     */
    @GetMapping({value: `${baseUrl}/analgesia/getAnalgesiaDataByPatientId/:patientId`})
    static async getAnalgesiaDataByPatientId(ctx) {

        const patientId = ctx.params.patientId;
        if (!patientId) {
            return ctx.response.body = buildParamError('Patient ID is required');
        }

        ctx.response.body = await AnalgesiaService.getAnalgesiaDataByPatientId(patientId);

    }

    /**
     * 创建一批 Analgesia 数据
     *  requestData: {
     *      patientId: String
     *      analgesiaData: Array
     *  }
     * @param ctx
     * @returns {Promise<*>}
     */
    @PostMapping({value: `${baseUrl}/analgesia/createAnalgesiaData/:patientId`})
    static async createAnalgesiaData(ctx) {

        const patientId = ctx.params.patientId;
        if (!patientId) {
            return ctx.response.body = buildParamError('Patient ID is required');
        }

        const requestData = ctx.request.body;
        let error = AnalgesiaController.verifyRequestData(patientId, requestData);
        if (error) {
            return ctx.response.body = error;
        }

        ctx.response.body = await AnalgesiaService.createAnalgesiaData(patientId, requestData);

    }

    /**
     * 更新一批 Analgesia 数据
     *  requestData: {
     *      patientId: String
     *      analgesiaData: Array
     *  }
     * @param ctx
     * @returns {Promise<*>}
     */
    @PostMapping({value: `${baseUrl}/analgesia/updateAnalgesiaData/:patientId`})
    static async updateAnalgesiaData(ctx) {

        const patientId = ctx.params.patientId;
        if (!patientId) {
            return ctx.response.body = buildParamError('Patient ID is required');
        }

        const requestData = ctx.request.body;
        let error = AnalgesiaController.verifyRequestData(patientId, requestData);
        if (error) {
            return ctx.response.body = error;
        }

        ctx.response.body = await AnalgesiaService.updateAnalgesiaData(patientId, requestData);

    }

    /**
     * 创建或更新一批 Analgesia 数据
     *  requestData: {
     *      patientId: String
     *      analgesiaData: Array
     *  }
     * @param ctx
     * @returns {Promise<*>}
     */
    @PostMapping({value: `${baseUrl}/analgesia/createOrUpdateAnalgesiaData/:patientId`})
    static async createOrUpdateAnalgesiaData(ctx) {

        const patientId = ctx.params.patientId;
        if (!patientId) {
            return ctx.response.body = buildParamError('Patient ID is required');
        }

        const requestData = ctx.request.body;
        let error = AnalgesiaController.verifyRequestData(patientId, requestData);
        if (error) {
            return ctx.response.body = error;
        }

        ctx.response.body = await AnalgesiaService.createOrUpdateAnalgesiaData(patientId, requestData);

    }

}

export default AnalgesiaController;
