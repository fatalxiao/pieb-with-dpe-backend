/**
 * @file AnalgesiaController.js
 */

// Services
import {
    getAnalgesiaDataByPatientId,
    createAnalgesiaData,
    updateAnalgesiaData,
    createOrUpdateAnalgesiaData
} from '../service/AnalgesiaService.js';

// Vendors
import {buildParamError} from '../utils/Response.js';
import {Api, ApiOperation, GetMapping, PostMapping, RequestBody} from '../utils/ApiDecorator';

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

        return;

    }

    /**
     * 获取某个 Patient ID 的 Analgesia 数据
     * @param ctx
     * @returns {Promise<string>}
     */
    @GetMapping({value: '/dpe/analgesia/getAnalgesiaDataByPatientId/:patientId'})
    @ApiOperation({value: 'get Analgesia Data by Patient Id', notes: ''})
    static async getAnalgesiaDataByPatientId(ctx) {

        const patientId = ctx.params.patientId;
        if (!patientId) {
            return ctx.response.body = buildParamError('Patient ID is required');
        }

        ctx.response.body = await getAnalgesiaDataByPatientId(patientId);

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
    @PostMapping({value: '/dpe/analgesia/createAnalgesiaData/:patientId'})
    @ApiOperation({value: 'add new analgesia data', notes: ''})
    @RequestBody({value: 'Analgesia'})
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

        ctx.response.body = await createAnalgesiaData(patientId, requestData);

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
    @PostMapping({value: '/dpe/analgesia/updateAnalgesiaData/:patientId'})
    @ApiOperation({value: 'update analgesia data', notes: ''})
    @RequestBody({value: 'Analgesia'})
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

        ctx.response.body = await updateAnalgesiaData(patientId, requestData);

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
    @PostMapping({value: '/dpe/analgesia/createOrUpdateAnalgesiaData/:patientId'})
    @ApiOperation({value: 'add or update analgesia data', notes: ''})
    @RequestBody({value: 'Analgesia'})
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

        ctx.response.body = await createOrUpdateAnalgesiaData(patientId, requestData);

    }

};

export default AnalgesiaController;
