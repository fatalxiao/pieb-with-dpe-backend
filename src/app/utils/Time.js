/**
 * @file Time.js
 */

// Vendors
import moment from 'moment';

/**
 * 获取两个时间之间的时长
 * @param t1
 * @param t2
 * @param format
 * @returns {number}
 */
export function duration(t1, t2, format = 'YYYY-MM-DD HH:mm:ss') {

    if (!t1 || !t2) {
        return -1;
    }

    const time1 = moment(t1, format),
        time2 = moment(t2, format);

    if (!time1.isValid() || !time2.isValid()) {
        return -1;
    }

    return Math.abs(+time1 - +time2);

}

export default {
    duration
};
