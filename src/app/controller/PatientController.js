/**
 * @file PatientController.js
 */

// Services
import PatientService from '../service/PatientService.js';
import ExportService from '../service/ExportService.js';

// Decorators
import {Api, GetMapping, PostMapping} from '../utils/ApiDecorator';

// Statics
import {baseUrl} from '../../config';

// Vendors
import xlsx from 'node-xlsx';
import moment from 'moment';
import {buildParamError} from '../utils/Response.js';

@Api({tags: 'Patient'})
class PatientController {

    /**
     * 校验创建时的 request 数据
     * @param requestData
     * @returns {string}
     */
    static verifyCreateData(requestData) {
        if (!requestData) {
            return buildParamError('Request Data is required');
        } else if (!requestData.id) {
            return buildParamError('ID is required');
        } else if (!requestData.groupId) {
            return buildParamError('Group is required');
        } else if (!requestData.name) {
            return buildParamError('Name is required');
        }
    }

    /**
     * 校验更新时的 request 数据
     * @param requestData
     * @returns {string}
     */
    static verifyUpdateData(requestData) {
        if (!requestData) {
            return buildParamError('Request Data is required');
        } else if (!requestData.id) {
            return buildParamError('ID is required');
        }
    }

    /**
     * 获取用于列表的 Patients 数据
     * @param ctx
     * @returns {Promise<void>}
     */
    @GetMapping({value: `${baseUrl}/patient/getPatients`})
    static async getPatients(ctx) {
        ctx.response.body = await PatientService.getPatients();
    }

    /**
     * 获取完全的 Patients 数据
     * @param ctx
     * @returns {Promise<void>}
     */
    @GetMapping({value: `${baseUrl}/patient/getFullPatients`})
    static async getFullPatients(ctx) {
        ctx.response.body = await PatientService.getFullPatients();
    }

    /**
     * 导出 excel 数据
     * @param ctx
     * @returns {Promise<void>}
     */
    @GetMapping({value: `${baseUrl}/patient/exportPatients`})
    static async exportPatients(ctx) {

        const {piebOptimalIntervalData} = await ExportService.getExportData();

        ctx.set('Content-Type', 'application/force-download');
        ctx.set('Content-Type', 'application/vnd.openxmlformats');
        ctx.set(
            'Content-Disposition',
            `attachment;filename=PIEB optimal interval data ${moment().format('YYYY-MM-DD')}.xlsx`
        );

        ctx.response.body = xlsx.build([{
            name: 'PIEB optimal interval',
            data: piebOptimalIntervalData
        }]);

    }

    /**
     * 根据 ID 获取 Patient 数据
     * @param ctx
     * @returns {Promise<string>}
     */
    @GetMapping({value: `${baseUrl}/patient/getPatientById/:id`})
    static async getPatientById(ctx) {

        const id = ctx.params.id;
        if (!id) {
            return ctx.response.body = buildParamError('Patient ID is required');
        }

        ctx.response.body = await PatientService.getPatientById(id);

    }

    /**
     * 创建一条 Patient 数据
     * @param ctx
     * @returns {Promise<string>}
     */
    @PostMapping({value: `${baseUrl}/patient/createPatient`})
    static async createPatient(ctx) {

        const requestData = ctx.request.body;

        let error = PatientController.verifyCreateData(requestData);
        if (error) {
            return ctx.response.body = error;
        }

        ctx.response.body = await PatientService.createPatient(requestData);

    }

    /**
     * 更新一条 Patient 数据
     * @param ctx
     * @returns {Promise<string>}
     */
    @PostMapping({value: `${baseUrl}/patient/updatePatient`})
    static async updatePatient(ctx) {

        const requestData = ctx.request.body;

        let error = PatientController.verifyUpdateData(requestData);
        if (error) {
            return ctx.response.body = error;
        }

        ctx.response.body = await PatientService.updatePatient(requestData);

    }

    /**
     * 创建或更新一条 Patient 数据
     * @param ctx
     * @returns {Promise<string>}
     */
    @PostMapping({value: `${baseUrl}/patient/createOrUpdatePatient`})
    static async createOrUpdatePatient(ctx) {

        const requestData = ctx.request.body;

        let error = PatientController.verifyUpdateData(requestData);
        if (error) {
            return ctx.response.body = error;
        }

        ctx.response.body = await PatientService.createOrUpdatePatient(requestData);

    }

    /**
     * 启用某个 ID 的 Patient
     * @param ctx
     * @returns {Promise<string>}
     */
    @PostMapping({value: `${baseUrl}/patient/enable/:id`})
    static async enablePatient(ctx) {

        const id = ctx.params.id;
        if (!id) {
            return ctx.response.body = buildParamError('Patient ID is required');
        }

        ctx.response.body = await PatientService.enablePatient(ctx.params.id);

    }

    /**
     * 禁用某个 ID 的 Patient
     * @param ctx
     * @returns {Promise<string>}
     */
    @PostMapping({value: `${baseUrl}/patient/disable/:id`})
    static async disablePatient(ctx) {

        const id = ctx.params.id;
        if (!id) {
            return ctx.response.body = buildParamError('Patient ID is required');
        }

        ctx.response.body = await PatientService.disablePatient(id);

    }

}

export default PatientController;
