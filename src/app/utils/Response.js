/**
 * @file Response.js
 */

export const Mappings = {

    SUCCESS: [2000, 'success'],

    ERROR: [4000, 'error'],
    PARAM_INCORRECT: [4001, 'param incorrect']

};

/**
 * 格式化 Response
 * @param code
 * @param msg
 * @param data
 * @returns {string}
 */
export function build([code, msg], data) {

    const json = {
        code,
        msg
    };

    if (data) {
        json.data = data;
    }

    return JSON.stringify(json);

}

/**
 * 格式化 Success Response
 * @param data
 * @returns {string}
 */
export function buildSuccess(data) {
    return build(Mappings.SUCCESS, data);
}

/**
 * 格式化 Error Response
 * @param data
 * @returns {string}
 */
export function buildError(data) {
    return build(Mappings.ERROR, data);
}

/**
 * 格式化 Param Incorrect Response
 * @param data
 * @returns {string}
 */
export function buildParamError(data) {
    return build(Mappings.PARAM_INCORRECT, data);
}

export default {
    build,
    buildSuccess,
    buildError,
    buildParamError
};
