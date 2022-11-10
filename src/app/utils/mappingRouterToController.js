/**
 * @file mappingRouterToController.js
 */

// Decorators
import {
    REQUEST_TAGS, REQUEST_METHOD, REQUEST_ROUTE, REQUEST_SUMMARY, REQUEST_DESCRIPTION,
    REQUEST_PARAMETERS_PATH, REQUEST_PARAMETERS_PARAM
} from './ApiDecorator';

// Vendors
import fs from 'fs';
import Router from 'koa-router';

const router = Router();

/**
 * 将 controllers 与其标注配置的 path 绑定
 * @param controller
 * @param method
 * @param requestMethod
 * @param requestRoute
 */
export function mappingPaths(controller, method, requestMethod, requestRoute) {

    const config = {
        tags: [controller[REQUEST_TAGS]],
        summary: method[REQUEST_SUMMARY],
        description: method[REQUEST_DESCRIPTION],
        consumes: [
            'application/json'
        ],
        produces: [
            'application/json'
        ],
        parameters: []
    };

    // 添加 PathVariable
    if (REQUEST_PARAMETERS_PATH in method) {
        for (let item of method[REQUEST_PARAMETERS_PATH]) {
            config.parameters.push({
                name: item?.value,
                in: 'query',
                description: item?.notes,
                required: item?.required
            });
        }
    }

    // 添加 ApiParam
    if (REQUEST_PARAMETERS_PARAM in method) {
        for (let item of method[REQUEST_PARAMETERS_PARAM]) {
            config.parameters.push({
                name: item?.value,
                in: 'body',
                description: item?.notes,
                required: item?.required,
                type: item?.type
            });
        }
    }

}

/**
 * 绑定 request method
 * @param controller
 * @param method
 */
export function mappingMethod(controller, method) {

    const requestMethod = method[REQUEST_METHOD];
    const requestRoute = method[REQUEST_ROUTE];

    mappingPaths(controller, method, requestMethod, requestRoute);

    // add mapping route
    // console.log(`register URL mapping: ${requestMethod.toUpperCase()} ${requestRoute}`);
    router[requestMethod](requestRoute, method);

}

/**
 * 绑定 controllers
 * @param controller
 */
export function mappingController(controller) {

    if (!controller) {
        return;
    }

    // traversal all rest class methods
    for (let methodName of Object.getOwnPropertyNames(controller)) {

        if (!methodName || !controller[methodName]
            || !controller[methodName][REQUEST_METHOD]
            || !controller[methodName][REQUEST_ROUTE]) {
            continue;
        }

        mappingMethod(controller, controller[methodName]);

    }

}

/**
 * 遍历 /app/controller 文件夹下的所有文件
 * @param dir
 */
export function mappingRouterToController(dir) {

    // traversal all controll file
    fs.readdirSync(dir + '/app/controller').forEach(file =>
        mappingController(require(dir + '/app/controller/' + file).default)
    );

    return router.routes();

}

export default mappingRouterToController;
