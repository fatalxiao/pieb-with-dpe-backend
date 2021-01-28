/**
 * @file ObservalModel.js
 */

// Vendors
import moment from 'moment';

/**
 * 格式化 Number 字段
 * @param value
 * @returns {null}
 */
export function formatNumberField(value) {
    return value !== '' && value !== undefined ? value : null;
}

/**
 * 格式化 DateTime 字段
 * @param value
 * @returns {null}
 */
export function formatDateTimeField(value) {
    return moment(value).isValid() ? value : null;
}

/**
 * 格式化 ResDate 字段
 * @param value
 * @returns {string}
 */
export function formatResDateTime(value) {

    if (!value) {
        return '';
    }

    const time = moment(value);

    if (!time.isValid()) {
        return '';
    }

    return moment(time).format('YYYY-MM-DD HH:mm:ss');

}

export default {
    formatNumberField,
    formatDateTimeField,
    formatResDateTime
};
