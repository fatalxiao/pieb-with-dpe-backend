/**
 * @file ObservalController.js
 */

// Services
import {
    getObservalDataByPatientId,
    createObservalData,
    updateObservalData,
    createOrUpdateObservalData
} from '../service/ObservalService.js';

// Vendors
import {buildParamError} from '../utils/Response.js';
import {Api, GetMapping, PostMapping} from '../utils/ApiDecorator';

@Api({tags: 'Observal'})
class ObservalController {

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
            return buildParamError('Observal Data is required');
        }

        return;

    }

    /**
     * 获取某个 Patient ID 的 Observal 数据
     * @param ctx
     * @returns {Promise<string>}
     */
    @GetMapping({value: '/dpe/observal/getObservalDataByPatientId/:patientId'})
    static async getObservalDataByPatientId(ctx) {

        const patientId = ctx.params.patientId;
        if (!patientId) {
            return ctx.response.body = buildParamError('Patient ID is required');
        }

        ctx.response.body = await getObservalDataByPatientId(patientId);

    }

    /**
     * 创建一条 Observal 数据
     * @param ctx
     * @returns {Promise<string>}
     */
    @PostMapping({value: '/dpe/observal/createObservalData/:patientId'})
    static async createObservalData(ctx) {

        const patientId = ctx.params.patientId;
        if (!patientId) {
            return ctx.response.body = buildParamError('Patient ID is required');
        }

        const requestData = ctx.request.body;
        let error = ObservalController.verifyRequestData(patientId, requestData);
        if (error) {
            return ctx.response.body = error;
        }

        ctx.response.body = await createObservalData(patientId, requestData);

    }

    /**
     * 更新一条 Observal 数据
     * @param ctx
     * @returns {Promise<string>}
     */
    @PostMapping({value: '/dpe/observal/updateObservalData/:patientId'})
    static async updateObservalData(ctx) {

        const patientId = ctx.params.patientId;
        if (!patientId) {
            return ctx.response.body = buildParamError('Patient ID is required');
        }

        const requestData = ctx.request.body;
        let error = ObservalController.verifyRequestData(patientId, requestData);
        if (error) {
            return ctx.response.body = error;
        }

        ctx.response.body = await updateObservalData(patientId, requestData);

    }

    /**
     * 创建或更新一条 Observal 数据
     * @param ctx
     * @returns {Promise<string>}
     */
    @PostMapping({value: '/dpe/observal/createOrUpdateObservalData/:patientId'})
    static async createOrUpdateObservalData(ctx) {

        const patientId = ctx.params.patientId;
        if (!patientId) {
            return ctx.response.body = buildParamError('Patient ID is required');
        }

        const requestData = ctx.request.body;
        let error = ObservalController.verifyRequestData(patientId, requestData);
        if (error) {
            return ctx.response.body = error;
        }

        ctx.response.body = await createOrUpdateObservalData(patientId, requestData);

    }

};

export default ObservalController;
