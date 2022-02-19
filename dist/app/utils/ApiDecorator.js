"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RequestMethod = exports.RequestMapping = exports.REQUEST_TAGS = exports.REQUEST_SUMMARY = exports.REQUEST_ROUTE = exports.REQUEST_PARAMETERS_PATH = exports.REQUEST_PARAMETERS_PARAM = exports.REQUEST_PARAMETERS_BODY = exports.REQUEST_METHOD = exports.REQUEST_DESCRIPTION = exports.PutMapping = exports.PostMapping = exports.PathVariable = exports.GetMapping = exports.DeleteMapping = exports.ApiParam = exports.Api = void 0;

/**
 * @file ApiDecorator.js
 */

/**
 * 用于标注的 Symbols
 * @type {symbol}
 */
var REQUEST_TAGS = Symbol('REQUEST_TAGS');
exports.REQUEST_TAGS = REQUEST_TAGS;
var REQUEST_METHOD = Symbol('REQUEST_METHOD');
exports.REQUEST_METHOD = REQUEST_METHOD;
var REQUEST_ROUTE = Symbol('REQUEST_ROUTE');
exports.REQUEST_ROUTE = REQUEST_ROUTE;
var REQUEST_SUMMARY = Symbol('REQUEST_SUMMARY');
exports.REQUEST_SUMMARY = REQUEST_SUMMARY;
var REQUEST_DESCRIPTION = Symbol('REQUEST_DESCRIPTION');
exports.REQUEST_DESCRIPTION = REQUEST_DESCRIPTION;
var REQUEST_PARAMETERS_PATH = Symbol('REQUEST_PARAMETERS_PATH');
exports.REQUEST_PARAMETERS_PATH = REQUEST_PARAMETERS_PATH;
var REQUEST_PARAMETERS_PARAM = Symbol('REQUEST_PARAMETERS_PARAM');
exports.REQUEST_PARAMETERS_PARAM = REQUEST_PARAMETERS_PARAM;
var REQUEST_PARAMETERS_BODY = Symbol('REQUEST_PARAMETERS_BODY');
/**
 * request 的 methods
 * @type {{DELETE: string, POST: string, GET: string, PUT: string}}
 */

exports.REQUEST_PARAMETERS_BODY = REQUEST_PARAMETERS_BODY;
var RequestMethod = {
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

exports.RequestMethod = RequestMethod;

var Api = function Api(_ref) {
  var tags = _ref.tags;
  return function (target) {
    target[REQUEST_TAGS] = tags;
    return target;
  };
};
/**
 * RequestMapping 标注
 * @param method
 * @param value
 * @returns {function(*, *, *): *}
 * @constructor
 */


exports.Api = Api;

var RequestMapping = function RequestMapping(_ref2) {
  var method = _ref2.method,
      value = _ref2.value;
  return function (target, name, descriptor) {
    descriptor.value[REQUEST_METHOD] = method;
    descriptor.value[REQUEST_ROUTE] = value;
    return descriptor;
  };
};
/**
 * GetMapping 标注
 * @param value
 * @returns {function(*, *, *): *}
 * @constructor
 */


exports.RequestMapping = RequestMapping;

var GetMapping = function GetMapping(_ref3) {
  var value = _ref3.value;
  return function (target, name, descriptor) {
    descriptor.value[REQUEST_METHOD] = RequestMethod.GET;
    descriptor.value[REQUEST_ROUTE] = value;
    return descriptor;
  };
};
/**
 * PostMapping 标注
 * @param value
 * @returns {function(*, *, *): *}
 * @constructor
 */


exports.GetMapping = GetMapping;

var PostMapping = function PostMapping(_ref4) {
  var value = _ref4.value;
  return function (target, name, descriptor) {
    descriptor.value[REQUEST_METHOD] = RequestMethod.POST;
    descriptor.value[REQUEST_ROUTE] = value;
    return descriptor;
  };
};
/**
 * PutMapping 标注
 * @param value
 * @returns {function(*, *, *): *}
 * @constructor
 */


exports.PostMapping = PostMapping;

var PutMapping = function PutMapping(_ref5) {
  var value = _ref5.value;
  return function (target, name, descriptor) {
    descriptor.value[REQUEST_METHOD] = RequestMethod.PUT;
    descriptor.value[REQUEST_ROUTE] = value;
    return descriptor;
  };
};
/**
 * DeleteMapping 标注
 * @param value
 * @returns {function(*, *, *): *}
 * @constructor
 */


exports.PutMapping = PutMapping;

var DeleteMapping = function DeleteMapping(_ref6) {
  var value = _ref6.value;
  return function (target, name, descriptor) {
    descriptor.value[REQUEST_METHOD] = RequestMethod.DELETE;
    descriptor.value[REQUEST_ROUTE] = value;
    return descriptor;
  };
};
/**
 * PathVariable 标注
 * @param value
 * @param notes
 * @param required
 * @returns {function(*, *, *): *}
 * @constructor
 */


exports.DeleteMapping = DeleteMapping;

var PathVariable = function PathVariable(_ref7) {
  var value = _ref7.value,
      notes = _ref7.notes,
      required = _ref7.required;
  return function (target, name, descriptor) {
    var param = {
      value: value,
      notes: notes,
      required: required
    };

    if (REQUEST_PARAMETERS_PATH in descriptor.value) {
      descriptor.value[REQUEST_PARAMETERS_PATH].push(param);
    } else {
      descriptor.value[REQUEST_PARAMETERS_PATH] = [param];
    }

    return descriptor;
  };
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


exports.PathVariable = PathVariable;

var ApiParam = function ApiParam(_ref8) {
  var value = _ref8.value,
      type = _ref8.type,
      notes = _ref8.notes,
      required = _ref8.required;
  return function (target, name, descriptor) {
    var param = {
      value: value,
      type: type,
      notes: notes,
      required: required
    };

    if (REQUEST_PARAMETERS_PARAM in descriptor.value) {
      descriptor.value[REQUEST_PARAMETERS_PARAM].push(param);
    } else {
      descriptor.value[REQUEST_PARAMETERS_PARAM] = [param];
    }

    return descriptor;
  };
};

exports.ApiParam = ApiParam;
var _default = {
  REQUEST_TAGS: REQUEST_TAGS,
  REQUEST_METHOD: REQUEST_METHOD,
  REQUEST_ROUTE: REQUEST_ROUTE,
  REQUEST_SUMMARY: REQUEST_SUMMARY,
  REQUEST_DESCRIPTION: REQUEST_DESCRIPTION,
  REQUEST_PARAMETERS_PATH: REQUEST_PARAMETERS_PATH,
  REQUEST_PARAMETERS_PARAM: REQUEST_PARAMETERS_PARAM,
  REQUEST_PARAMETERS_BODY: REQUEST_PARAMETERS_BODY,
  RequestMethod: RequestMethod,
  Api: Api,
  RequestMapping: RequestMapping,
  GetMapping: GetMapping,
  PostMapping: PostMapping,
  PutMapping: PutMapping,
  DeleteMapping: DeleteMapping,
  PathVariable: PathVariable,
  ApiParam: ApiParam
};
exports["default"] = _default;