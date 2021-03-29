/**
 * @file ExportFormat.js
 */

import {duration} from './Time';

/**
 * 格式化 boolean 类型，转换成 "1" / "0"
 * @param value
 * @returns {string}
 */
export function formatBoolean(value) {
    return value ? '1' : '0';
}

/**
 * 格式化 number 类型，转换成数字字符串
 * @param value
 * @returns {string}
 */
export function formatNumber(value) {
    return isNaN(value) || value == null ? '' : '' + value;
}

/**
 * 格式化 string 类型，默认显示空字符串而不是 null 或 undefined
 * @param value
 * @returns {*|string}
 */
export function formatString(value) {
    return value || '';
}

/**
 * 格式化时长，将单位从 "毫秒" 按转换为 "分钟"
 * @param value
 * @returns {number|string}
 */
export function formatDuration(value) {
    return !isNaN(value) && value > 0 ?
        value / 60000
        :
        '';
}

export default {
    formatBoolean,
    formatNumber,
    formatString,
    formatDuration
};
