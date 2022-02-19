"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Position = exports.DEFAULT_TIMEPOINTS = exports.BASE_DATA = void 0;
exports.fullFillAnalgesiaData = fullFillAnalgesiaData;
exports.getDefaultData = getDefaultData;
exports.getMaxBromageScore = getMaxBromageScore;
exports.getMaxThoracicSensoryBlock = getMaxThoracicSensoryBlock;
exports.getMinSacralSensoryBlock = getMinSacralSensoryBlock;
exports.getThoracicSensoryBlockByValue = getThoracicSensoryBlockByValue;
exports.getTimePointOfSacralSensoryBlock = getTimePointOfSacralSensoryBlock;
exports.getTimePointOfThoracicSensoryBlock = getTimePointOfThoracicSensoryBlock;
exports.getTimePointOfVasLessThan1 = getTimePointOfVasLessThan1;
exports.getVasScore = getVasScore;
exports.getVasScoreWithContraction = getVasScoreWithContraction;
exports.isAdequatePainRelief = isAdequatePainRelief;
exports.isFetalHeartRateDecreased = isFetalHeartRateDecreased;
exports.isSacralSensoryInTime = isSacralSensoryInTime;
exports.isUnilateralSensoryBlock = isUnilateralSensoryBlock;
exports.isVasLessThan1 = isVasLessThan1;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _compact = _interopRequireDefault(require("lodash/compact"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * 左侧或右侧
 * @type {{LEFT: string, RIGHT: string}}
 */
var Position = {
  LEFT: 'Left',
  RIGHT: 'Right'
};
/**
 * 行数据
 * @type {{thoracicSensoryBlockLeft: null, bromageScore: null, fetalHeartRate: null, sacralSensoryBlockRight: null, pulseOxygenSaturation: null, heartRate: null, thoracicSensoryBlockRight: null, sacralSensoryBlockLeft: null, diastolicBloodPressure: null, hasContraction: boolean, systolicBloodPressure: null, vasScore: null}}
 */

exports.Position = Position;
var BASE_DATA = {
  hasContraction: false,
  vasScore: null,
  thoracicSensoryBlockLeft: null,
  thoracicSensoryBlockRight: null,
  sacralSensoryBlockLeft: null,
  sacralSensoryBlockRight: null,
  bromageScore: null,
  systolicBloodPressure: null,
  diastolicBloodPressure: null,
  heartRate: null,
  pulseOxygenSaturation: null,
  fetalHeartRate: null
};
/**
 * 默认的时间点
 * @type {number[]}
 */

exports.BASE_DATA = BASE_DATA;
var DEFAULT_TIMEPOINTS = [0, 20, 60, 2 * 60, 3 * 60, 4 * 60, 5 * 60, 6 * 60];
/**
 * 获取默认的麻醉数据
 * @param timePoints
 * @returns {({thoracicSensoryBlockLeft, bromageScore, fetalHeartRate, sacralSensoryBlockRight, pulseOxygenSaturation, heartRate, thoracicSensoryBlockRight, sacralSensoryBlockLeft, diastolicBloodPressure, hasContraction, systolicBloodPressure, vasScore}&{timePoint: number})[]}
 */

exports.DEFAULT_TIMEPOINTS = DEFAULT_TIMEPOINTS;

function getDefaultData() {
  var timePoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_TIMEPOINTS;
  return timePoints.map(function (timePoint) {
    return _objectSpread(_objectSpread({}, BASE_DATA), {}, {
      timePoint: timePoint
    });
  });
}
/**
 * 将现有的 analgesia 数据和默认的麻醉数据合并，插入现有数据中没有的时间点
 * @param analgesiaData
 * @returns {({thoracicSensoryBlockLeft, bromageScore, fetalHeartRate, sacralSensoryBlockRight, pulseOxygenSaturation, heartRate, thoracicSensoryBlockRight, sacralSensoryBlockLeft, diastolicBloodPressure, hasContraction, systolicBloodPressure, vasScore}&{timePoint: number})[]}
 */


function fullFillAnalgesiaData(analgesiaData) {
  if (!analgesiaData || (analgesiaData === null || analgesiaData === void 0 ? void 0 : analgesiaData.length) < 1) {
    return [];
  }

  var data = getDefaultData();
  analgesiaData.sort(function (a, b) {
    return a.timePoint - b.timePoint;
  });

  if ((analgesiaData === null || analgesiaData === void 0 ? void 0 : analgesiaData.length) > 0) {
    var _iterator = _createForOfIteratorHelper(analgesiaData),
        _step;

    try {
      var _loop = function _loop() {
        var resItem = _step.value;
        var index = data.findIndex(function (a) {
          return a.timePoint === resItem.timePoint;
        });

        if (index > -1) {
          data[index] = resItem;
        } else {
          (function () {
            var timePoint = DEFAULT_TIMEPOINTS[DEFAULT_TIMEPOINTS.length - 1];

            while (timePoint < resItem.timePoint) {
              timePoint += 60;

              if (timePoint >= resItem.timePoint) {
                data.push(resItem);
              } else {
                var i = data.findIndex(function (a) {
                  return a.timePoint === timePoint;
                });

                if (i < 0) {
                  data.push(_objectSpread(_objectSpread({}, BASE_DATA), {}, {
                    timePoint: timePoint
                  }));
                }
              }
            }
          })();
        }
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return data;
}
/**
 * 获取 Vas 评分
 * @param analgesiaData
 * @param timePoint
 * @returns {string}
 */


function getVasScore(analgesiaData, timePoint) {
  if (!analgesiaData || analgesiaData.length < 1) {
    return '';
  }

  analgesiaData.sort(function (a, b) {
    return a.timePoint - b.timePoint;
  });
  var index = analgesiaData.findIndex(function (item) {
    return item && item.timePoint === timePoint;
  });

  if (index === -1) {
    return '';
  }

  var reuslt = analgesiaData[index].vasScore;
  return reuslt === null ? '' : '' + reuslt * 10;
}
/**
 * 获取宫缩时的 Vas 评分
 * @param analgesiaData
 * @param timePoint
 * @returns {string}
 */


function getVasScoreWithContraction(analgesiaData, timePoint) {
  if (!analgesiaData || analgesiaData.length < 1) {
    return '';
  }

  analgesiaData.sort(function (a, b) {
    return a.timePoint - b.timePoint;
  });
  var index = analgesiaData.findIndex(function (item) {
    return item && item.timePoint === timePoint;
  });

  if (index === -1 || !analgesiaData[index].hasContraction) {
    return '';
  }

  var reuslt = analgesiaData[index].vasScore;
  return reuslt === null ? '' : '' + reuslt * 10;
}
/**
 * Vas 评分是否小于1
 * @param analgesiaData
 * @param timePoint
 * @returns {boolean}
 */


function isVasLessThan1(analgesiaData, timePoint) {
  if (!analgesiaData || analgesiaData.length < 1) {
    return false;
  }

  analgesiaData.sort(function (a, b) {
    return a.timePoint - b.timePoint;
  });

  var _iterator2 = _createForOfIteratorHelper(analgesiaData),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;

      if (item > timePoint) {
        return false;
      }

      if (item.hasContraction && item.vasScore !== null && item.vasScore <= 1) {
        return true;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
/**
 * 获取 VAS 评分 <= 1 的时间点
 * 首先找到最早有宫缩且 VAS 评分 <= 1 的时间点，如果找到的前一时间点 VAS 评分 <= 1 取前一时间点，否则取找到的时间点
 * @param analgesiaData
 * @returns {*}
 */


function getTimePointOfVasLessThan1(analgesiaData) {
  if (!analgesiaData || analgesiaData.length < 1) {
    return null;
  }

  analgesiaData.sort(function (a, b) {
    return a.timePoint - b.timePoint;
  });
  var index = analgesiaData.findIndex(function (item) {
    return item && item.hasContraction && item.vasScore !== null && item.vasScore <= 1;
  });

  if (index === -1) {
    return null;
  }

  if (index === 0) {
    return 0;
  }

  var prevItem = analgesiaData[index - 1];

  if (prevItem && prevItem.vasScore !== null && prevItem.vasScore <= 1) {
    return prevItem.timePoint;
  }

  return analgesiaData[index].timePoint;
}
/**
 * 是否在指定时间内达到最低阻滞
 * @param analgesiaData
 * @param sensory
 * @param timePoint
 * @param position
 * @returns {boolean}
 */


function isSacralSensoryInTime(analgesiaData, sensory, timePoint, position) {
  if (!analgesiaData || analgesiaData.length < 1) {
    return false;
  }

  analgesiaData.sort(function (a, b) {
    return a.timePoint - b.timePoint;
  });

  var _iterator3 = _createForOfIteratorHelper(analgesiaData),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var item = _step3.value;

      if (item.timePoint > timePoint) {
        return false;
      }

      if (item["sacralSensoryBlock".concat(position, "Value")] >= sensory) {
        return true;
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
}
/**
 * 根据 value 获取对应的阻滞平面
 * @param sensoryBlocks
 * @param value
 * @returns {null|*}
 */


function getThoracicSensoryBlockByValue(sensoryBlocks, value) {
  if (!sensoryBlocks || !(0, _isArray["default"])(sensoryBlocks) || isNaN(value)) {
    return null;
  }

  return sensoryBlocks.find(function (sensoryBlock) {
    return (sensoryBlock === null || sensoryBlock === void 0 ? void 0 : sensoryBlock.type) === 1 && (sensoryBlock === null || sensoryBlock === void 0 ? void 0 : sensoryBlock.value) === value;
  });
}
/**
 * 获取最大的最高阻滞
 * @param analgesiaData
 * @param position
 * @param minTimePoint
 * @returns {null|any}
 */


function getMaxThoracicSensoryBlock(analgesiaData, position) {
  var minTimePoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (!analgesiaData || analgesiaData.length < 1) {
    return null;
  }

  var data = (0, _compact["default"])(analgesiaData).filter(function (item) {
    return item.timePoint >= minTimePoint;
  }).map(function (item) {
    return item["thoracicSensoryBlock".concat(position, "Value")] || null;
  });
  return data.length > 0 ? Math.max.apply(Math, (0, _toConsumableArray2["default"])(data)) : null;
}
/**
 * 获取最小的最低阻滞
 * @param analgesiaData
 * @param position
 * @returns {null|any}
 */


function getMinSacralSensoryBlock(analgesiaData, position) {
  if (!analgesiaData || analgesiaData.length < 1) {
    return null;
  }

  var data = (0, _compact["default"])(analgesiaData).map(function (item) {
    return item["sacralSensoryBlock".concat(position, "Value")] || null;
  });
  return data.length > 0 ? Math.max.apply(Math, (0, _toConsumableArray2["default"])(data)) : null;
}
/**
 * 是否有单侧阻滞
 * @param analgesiaData
 * @returns {boolean}
 */


function isUnilateralSensoryBlock(analgesiaData) {
  if (!analgesiaData || analgesiaData.length < 1) {
    return false;
  }

  analgesiaData.sort(function (a, b) {
    return a.timePoint - b.timePoint;
  });

  var _iterator4 = _createForOfIteratorHelper(analgesiaData),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var item = _step4.value;

      if (Math.abs(item.sacralSensoryBlockLeftValue - item.sacralSensoryBlockRightValue) > 2 || Math.abs(item.thoracicSensoryBlockLeftValue - item.thoracicSensoryBlockRightValue) > 2) {
        return true;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  return false;
}
/**
 * 获取指定最高阻滞的时间点
 * @param analgesiaData
 * @param sensoryBlock
 * @returns {null|number|Analgesia.timePoint|{set, field, type}|where.timePoint|{}}
 */


function getTimePointOfThoracicSensoryBlock(analgesiaData, sensoryBlock) {
  if (!analgesiaData || analgesiaData.length < 1) {
    return null;
  }

  analgesiaData.sort(function (a, b) {
    return a.timePoint - b.timePoint;
  });

  var _iterator5 = _createForOfIteratorHelper(analgesiaData),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var item = _step5.value;

      if (item.thoracicSensoryBlockLeftValue >= sensoryBlock && item.thoracicSensoryBlockRightValue >= sensoryBlock) {
        return item.timePoint;
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  return null;
}
/**
 * 获取指定最低阻滞的时间点
 * @param analgesiaData
 * @param sensoryBlock
 * @returns {number|Analgesia.timePoint|{set, field, type}|*|where.timePoint|{}|null}
 */


function getTimePointOfSacralSensoryBlock(analgesiaData, sensoryBlock) {
  if (!analgesiaData || analgesiaData.length < 1) {
    return null;
  }

  analgesiaData.sort(function (a, b) {
    return a.timePoint - b.timePoint;
  });

  var _iterator6 = _createForOfIteratorHelper(analgesiaData),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var item = _step6.value;

      if (item.sacralSensoryBlockLeftValue >= sensoryBlock && item.sacralSensoryBlockRightValue >= sensoryBlock) {
        return item.timePoint;
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }

  return null;
}
/**
 * 是否有胎儿心率降低
 * @param analgesiaData
 * @returns {boolean}
 */


function isFetalHeartRateDecreased(analgesiaData) {
  if (!analgesiaData || analgesiaData.length < 1) {
    return false;
  }

  analgesiaData.sort(function (a, b) {
    return a.timePoint - b.timePoint;
  });

  var _iterator7 = _createForOfIteratorHelper(analgesiaData),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var item = _step7.value;

      if (item.timePoint < 30 && item.fetalHeartRate !== null && item.fetalHeartRate < 110) {
        return true;
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  return false;
}
/**
 * 是否满意镇痛
 * 如果当前时间点的VAS评分<=1，要么当前时间点有宫缩，要么下个时间点有宫缩切VAS评分<=1，即为true，否则为false
 * @param analgesiaData
 * @param timePoint
 * @returns {boolean}
 */


function isAdequatePainRelief(analgesiaData, timePoint) {
  if (!analgesiaData || analgesiaData.length < 1) {
    return false;
  }

  analgesiaData.sort(function (a, b) {
    return a.timePoint - b.timePoint;
  });
  var index = analgesiaData.findIndex(function (item) {
    return item && item.timePoint === timePoint;
  });

  if (index === -1 || analgesiaData[index].vasScore === null || analgesiaData[index].vasScore > 1) {
    return false;
  }

  if (analgesiaData[index].hasContraction) {
    return true;
  }

  var prevIndex = index - 1;

  while (prevIndex >= 0) {
    if (analgesiaData[prevIndex].hasContraction && analgesiaData[prevIndex].vasScore !== null && analgesiaData[prevIndex].vasScore <= 1) {
      return true;
    }

    if (analgesiaData[prevIndex].vasScore > 1) {
      break;
    }

    prevIndex--;
  }

  var nextIndex = index + 1;

  while (nextIndex < analgesiaData.length && analgesiaData[nextIndex].timePoint <= 30) {
    if (analgesiaData[nextIndex].hasContraction && analgesiaData[nextIndex].vasScore !== null && analgesiaData[nextIndex].vasScore <= 1) {
      return true;
    }

    if (analgesiaData[nextIndex].vasScore > 1) {
      break;
    }

    nextIndex++;
  }

  return false;
}
/**
 * 获取 analgesiaData 中最大的 Bromage 评分
 * @param analgesiaData
 * @returns {number}
 */


function getMaxBromageScore(analgesiaData) {
  if (!analgesiaData || analgesiaData.length < 1) {
    return 0;
  }

  return Math.max.apply(Math, (0, _toConsumableArray2["default"])(analgesiaData.map(function (item) {
    return (item === null || item === void 0 ? void 0 : item.bromageScore) || 0;
  })));
}

var _default = {
  Position: Position,
  BASE_DATA: BASE_DATA,
  DEFAULT_TIMEPOINTS: DEFAULT_TIMEPOINTS,
  fullFillAnalgesiaData: fullFillAnalgesiaData,
  getVasScore: getVasScore,
  getVasScoreWithContraction: getVasScoreWithContraction,
  isVasLessThan1: isVasLessThan1,
  getTimePointOfVasLessThan1: getTimePointOfVasLessThan1,
  isSacralSensoryInTime: isSacralSensoryInTime,
  getThoracicSensoryBlockByValue: getThoracicSensoryBlockByValue,
  getMaxThoracicSensoryBlock: getMaxThoracicSensoryBlock,
  getMinSacralSensoryBlock: getMinSacralSensoryBlock,
  isUnilateralSensoryBlock: isUnilateralSensoryBlock,
  getTimePointOfThoracicSensoryBlock: getTimePointOfThoracicSensoryBlock,
  getTimePointOfSacralSensoryBlock: getTimePointOfSacralSensoryBlock,
  isFetalHeartRateDecreased: isFetalHeartRateDecreased,
  isAdequatePainRelief: isAdequatePainRelief,
  getMaxBromageScore: getMaxBromageScore
};
exports["default"] = _default;