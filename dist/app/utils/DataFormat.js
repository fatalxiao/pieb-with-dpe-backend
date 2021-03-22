"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatNumberField = formatNumberField;
exports.formatDateTimeField = formatDateTimeField;
exports.formatResDateTime = formatResDateTime;
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

/**
 * @file ObservalModel.js
 */
// Vendors

/**
 * 格式化 Number 字段
 * @param value
 * @returns {null}
 */
function formatNumberField(value) {
  return value !== '' && value !== undefined ? value : null;
}
/**
 * 格式化 DateTime 字段
 * @param value
 * @returns {null}
 */


function formatDateTimeField(value) {
  return (0, _moment["default"])(value).isValid() ? value : null;
}
/**
 * 格式化 ResDate 字段
 * @param value
 * @returns {string}
 */


function formatResDateTime(value) {
  if (!value) {
    return '';
  }

  var time = (0, _moment["default"])(value);

  if (!time.isValid()) {
    return '';
  }

  return (0, _moment["default"])(time).format('YYYY-MM-DD HH:mm:ss');
}

var _default = {
  formatNumberField: formatNumberField,
  formatDateTimeField: formatDateTimeField,
  formatResDateTime: formatResDateTime
};
exports["default"] = _default;