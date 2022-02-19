"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mappings = void 0;
exports.build = build;
exports.buildError = buildError;
exports.buildParamError = buildParamError;
exports.buildSuccess = buildSuccess;
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

/**
 * @file Response.js
 */
var Mappings = {
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

exports.Mappings = Mappings;

function build(_ref, data) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      code = _ref2[0],
      msg = _ref2[1];

  var json = {
    code: code,
    msg: msg
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


function buildSuccess(data) {
  return build(Mappings.SUCCESS, data);
}
/**
 * 格式化 Error Response
 * @param data
 * @returns {string}
 */


function buildError(data) {
  return build(Mappings.ERROR, data);
}
/**
 * 格式化 Param Incorrect Response
 * @param data
 * @returns {string}
 */


function buildParamError(data) {
  return build(Mappings.PARAM_INCORRECT, data);
}

var _default = {
  build: build,
  buildSuccess: buildSuccess,
  buildError: buildError,
  buildParamError: buildParamError
};
exports["default"] = _default;