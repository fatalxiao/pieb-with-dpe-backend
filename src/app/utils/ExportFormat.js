/**
 * @file ExportFormat.js
 */

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

export default {
    formatBoolean,
    formatNumber,
    formatString
};
