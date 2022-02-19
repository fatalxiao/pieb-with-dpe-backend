"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.duration = duration;

var _moment = _interopRequireDefault(require("moment"));

/**
 * @file Time.js
 */
// Vendors

/**
 * 获取两个时间之间的时长
 * @param t1
 * @param t2
 * @param format
 * @returns {number}
 */
function duration(t1, t2) {
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'YYYY-MM-DD HH:mm:ss';

  if (!t1 || !t2) {
    return -1;
  }

  var time1 = (0, _moment["default"])(t1, format),
      time2 = (0, _moment["default"])(t2, format);

  if (!time1.isValid() || !time2.isValid()) {
    return -1;
  }

  return Math.abs(+time1 - +time2);
}

var _default = {
  duration: duration
};
exports["default"] = _default;