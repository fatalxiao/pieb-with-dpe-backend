"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.formatDateTimeField = formatDateTimeField;
exports.formatNumberField = formatNumberField;
exports.formatResDateTime = formatResDateTime;
exports.formatResTime = formatResTime;
exports.formatTimeField = formatTimeField;

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
 * 格式化 Time 字段
 * @param value
 * @returns {null}
 */


function formatTimeField(value) {
  return (0, _moment["default"])(value).isValid() ? value : null;
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
 * 格式化 ResTime 字段
 * @param value
 * @returns {string}
 */


function formatResTime(value) {
  if (!value) {
    return '';
  }

  var time = (0, _moment["default"])(value);

  if (!time.isValid()) {
    return '';
  }

  return (0, _moment["default"])(time).format('HH:mm:ss');
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
  formatTimeField: formatTimeField,
  formatDateTimeField: formatDateTimeField,
  formatResTime: formatResTime,
  formatResDateTime: formatResDateTime
};
exports["default"] = _default;