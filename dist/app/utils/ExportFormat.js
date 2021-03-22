"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatBoolean = formatBoolean;
exports.formatNumber = formatNumber;
exports.formatString = formatString;
exports["default"] = void 0;

/**
 * @file ExportFormat.js
 */

/**
 * 格式化 boolean 类型，转换成 "1" / "0"
 * @param value
 * @returns {string}
 */
function formatBoolean(value) {
  return value ? '1' : '0';
}
/**
 * 格式化 number 类型，转换成数字字符串
 * @param value
 * @returns {string}
 */


function formatNumber(value) {
  return isNaN(value) || value == null ? '' : '' + value;
}
/**
 * 格式化 string 类型，默认显示空字符串而不是 null 或 undefined
 * @param value
 * @returns {*|string}
 */


function formatString(value) {
  return value || '';
}

var _default = {
  formatBoolean: formatBoolean,
  formatNumber: formatNumber,
  formatString: formatString
};
exports["default"] = _default;