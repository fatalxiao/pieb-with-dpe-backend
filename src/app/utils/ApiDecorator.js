/**
 * @file ApiDecorator.js
 */

/**
 * 用于标注的 Symbols
 * @type {symbol}
 */
export const REQUEST_TAGS = Symbol('REQUEST_TAGS');
export const REQUEST_METHOD = Symbol('REQUEST_METHOD');
export const REQUEST_ROUTE = Symbol('REQUEST_ROUTE');
export const REQUEST_SUMMARY = Symbol('REQUEST_SUMMARY');
export const REQUEST_DESCRIPTION = Symbol('REQUEST_DESCRIPTION');
export const REQUEST_PARAMETERS_PATH = Symbol('REQUEST_PARAMETERS_PATH');
export const REQUEST_PARAMETERS_PARAM = Symbol('REQUEST_PARAMETERS_PARAM');
export const REQUEST_PARAMETERS_BODY = Symbol('REQUEST_PARAMETERS_BODY');

/**
 * request 的 methods
 * @type {{DELETE: string, POST: string, GET: string, PUT: string}}
 */
export const RequestMethod = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete'
};

/**
 * Api 标注
 * @param tags
 * @returns {function(*): *}
 * @constructor
 */
export const Api = ({tags}) => target => {
    target[REQUEST_TAGS] = tags;
    return target;
};

/**
 * RequestMapping 标注
 * @param method
 * @param value
 * @returns {function(*, *, *): *}
 * @constructor
 */
export const RequestMapping = ({method, value}) => (target, name, descriptor) => {
    descriptor.value[REQUEST_METHOD] = method;
    descriptor.value[REQUEST_ROUTE] = value;
    return descriptor;
};

/**
 * GetMapping 标注
 * @param value
 * @returns {function(*, *, *): *}
 * @constructor
 */
export const GetMapping = ({value}) => (target, name, descriptor) => {
    descriptor.value[REQUEST_METHOD] = RequestMethod.GET;
    descriptor.value[REQUEST_ROUTE] = value;
    return descriptor;
};

/**
 * PostMapping 标注
 * @param value
 * @returns {function(*, *, *): *}
 * @constructor
 */
export const PostMapping = ({value}) => (target, name, descriptor) => {
    descriptor.value[REQUEST_METHOD] = RequestMethod.POST;
    descriptor.value[REQUEST_ROUTE] = value;
    return descriptor;
};

/**
 * PutMapping 标注
 * @param value
 * @returns {function(*, *, *): *}
 * @constructor
 */
export const PutMapping = ({value}) => (target, name, descriptor) => {
    descriptor.value[REQUEST_METHOD] = RequestMethod.PUT;
    descriptor.value[REQUEST_ROUTE] = value;
    return descriptor;
};

/**
 * DeleteMapping 标注
 * @param value
 * @returns {function(*, *, *): *}
 * @constructor
 */
export const DeleteMapping = ({value}) => (target, name, descriptor) => {
    descriptor.value[REQUEST_METHOD] = RequestMethod.DELETE;
    descriptor.value[REQUEST_ROUTE] = value;
    return descriptor;
};

/**
 * PathVariable 标注
 * @param value
 * @param notes
 * @param required
 * @returns {function(*, *, *): *}
 * @constructor
 */
export const PathVariable = ({value, notes, required}) => (target, name, descriptor) => {

    const param = {
        value,
        notes,
        required
    };

    if (REQUEST_PARAMETERS_PATH in descriptor.value) {
        descriptor.value[REQUEST_PARAMETERS_PATH].push(param);
    } else {
        descriptor.value[REQUEST_PARAMETERS_PATH] = [param];
    }

    return descriptor;

};

/**
 * ApiParam 标注
 * @param value
 * @param type
 * @param notes
 * @param required
 * @returns {function(*, *, *): *}
 * @constructor
 */
export const ApiParam = ({value, type, notes, required}) => (target, name, descriptor) => {

    const param = {
        value,
        type,
        notes,
        required
    };

    if (REQUEST_PARAMETERS_PARAM in descriptor.value) {
        descriptor.value[REQUEST_PARAMETERS_PARAM].push(param);
    } else {
        descriptor.value[REQUEST_PARAMETERS_PARAM] = [param];
    }

    return descriptor;

};

export default {

    REQUEST_TAGS,
    REQUEST_METHOD,
    REQUEST_ROUTE,
    REQUEST_SUMMARY,
    REQUEST_DESCRIPTION,
    REQUEST_PARAMETERS_PATH,
    REQUEST_PARAMETERS_PARAM,
    REQUEST_PARAMETERS_BODY,

    RequestMethod,

    Api,
    RequestMapping,
    GetMapping,
    PostMapping,
    PutMapping,
    DeleteMapping,
    PathVariable,
    ApiParam

};
