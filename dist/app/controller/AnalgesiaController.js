"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _AnalgesiaService = _interopRequireDefault(require("../service/AnalgesiaService.js"));

var _ApiDecorator = require("../utils/ApiDecorator");

var _config = require("../../config");

var _Response = require("../utils/Response.js");

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2;

var AnalgesiaController = (_dec = (0, _ApiDecorator.Api)({
  tags: 'Analgesia'
}), _dec2 = (0, _ApiDecorator.GetMapping)({
  value: "".concat(_config.baseUrl, "/analgesia/getAnalgesiaDataByPatientId/:patientId")
}), _dec3 = (0, _ApiDecorator.PostMapping)({
  value: "".concat(_config.baseUrl, "/analgesia/createAnalgesiaData/:patientId")
}), _dec4 = (0, _ApiDecorator.PostMapping)({
  value: "".concat(_config.baseUrl, "/analgesia/updateAnalgesiaData/:patientId")
}), _dec5 = (0, _ApiDecorator.PostMapping)({
  value: "".concat(_config.baseUrl, "/analgesia/createOrUpdateAnalgesiaData/:patientId")
}), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function AnalgesiaController() {
    (0, _classCallCheck2["default"])(this, AnalgesiaController);
  }

  (0, _createClass2["default"])(AnalgesiaController, null, [{
    key: "verifyRequestData",
    value:
    /**
     * 校验 request 数据
     * @param patientId
     * @param requestData
     * @returns {string}
     */
    function verifyRequestData(patientId, requestData) {
      if (!requestData) {
        return (0, _Response.buildParamError)('Request Data is required');
      } else if (!patientId) {
        return (0, _Response.buildParamError)('Patient ID is required');
      } else if (!requestData) {
        return (0, _Response.buildParamError)('Analgesia Data is required');
      }
    }
    /**
     * 获取某个 Patient ID 的 Analgesia 数据
     * @param ctx
     * @returns {Promise<string>}
     */

  }, {
    key: "getAnalgesiaDataByPatientId",
    value: function () {
      var _getAnalgesiaDataByPatientId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
        var patientId;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                patientId = ctx.params.patientId;

                if (patientId) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", ctx.response.body = (0, _Response.buildParamError)('Patient ID is required'));

              case 3:
                _context.next = 5;
                return _AnalgesiaService["default"].getAnalgesiaDataByPatientId(patientId);

              case 5:
                ctx.response.body = _context.sent;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getAnalgesiaDataByPatientId(_x) {
        return _getAnalgesiaDataByPatientId.apply(this, arguments);
      }

      return getAnalgesiaDataByPatientId;
    }()
    /**
     * 创建一批 Analgesia 数据
     *  requestData: {
     *      patientId: String
     *      analgesiaData: Array
     *  }
     * @param ctx
     * @returns {Promise<*>}
     */

  }, {
    key: "createAnalgesiaData",
    value: function () {
      var _createAnalgesiaData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx) {
        var patientId, requestData, error;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                patientId = ctx.params.patientId;

                if (patientId) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", ctx.response.body = (0, _Response.buildParamError)('Patient ID is required'));

              case 3:
                requestData = ctx.request.body;
                error = AnalgesiaController.verifyRequestData(patientId, requestData);

                if (!error) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", ctx.response.body = error);

              case 7:
                _context2.next = 9;
                return _AnalgesiaService["default"].createAnalgesiaData(patientId, requestData);

              case 9:
                ctx.response.body = _context2.sent;

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function createAnalgesiaData(_x2) {
        return _createAnalgesiaData.apply(this, arguments);
      }

      return createAnalgesiaData;
    }()
    /**
     * 更新一批 Analgesia 数据
     *  requestData: {
     *      patientId: String
     *      analgesiaData: Array
     *  }
     * @param ctx
     * @returns {Promise<*>}
     */

  }, {
    key: "updateAnalgesiaData",
    value: function () {
      var _updateAnalgesiaData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ctx) {
        var patientId, requestData, error;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                patientId = ctx.params.patientId;

                if (patientId) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", ctx.response.body = (0, _Response.buildParamError)('Patient ID is required'));

              case 3:
                requestData = ctx.request.body;
                error = AnalgesiaController.verifyRequestData(patientId, requestData);

                if (!error) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", ctx.response.body = error);

              case 7:
                _context3.next = 9;
                return _AnalgesiaService["default"].updateAnalgesiaData(patientId, requestData);

              case 9:
                ctx.response.body = _context3.sent;

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function updateAnalgesiaData(_x3) {
        return _updateAnalgesiaData.apply(this, arguments);
      }

      return updateAnalgesiaData;
    }()
    /**
     * 创建或更新一批 Analgesia 数据
     *  requestData: {
     *      patientId: String
     *      analgesiaData: Array
     *  }
     * @param ctx
     * @returns {Promise<*>}
     */

  }, {
    key: "createOrUpdateAnalgesiaData",
    value: function () {
      var _createOrUpdateAnalgesiaData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(ctx) {
        var patientId, requestData, error;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                patientId = ctx.params.patientId;

                if (patientId) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return", ctx.response.body = (0, _Response.buildParamError)('Patient ID is required'));

              case 3:
                requestData = ctx.request.body;
                error = AnalgesiaController.verifyRequestData(patientId, requestData);

                if (!error) {
                  _context4.next = 7;
                  break;
                }

                return _context4.abrupt("return", ctx.response.body = error);

              case 7:
                _context4.next = 9;
                return _AnalgesiaService["default"].createOrUpdateAnalgesiaData(patientId, requestData);

              case 9:
                ctx.response.body = _context4.sent;

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function createOrUpdateAnalgesiaData(_x4) {
        return _createOrUpdateAnalgesiaData.apply(this, arguments);
      }

      return createOrUpdateAnalgesiaData;
    }()
  }]);
  return AnalgesiaController;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class2, "getAnalgesiaDataByPatientId", [_dec2], Object.getOwnPropertyDescriptor(_class2, "getAnalgesiaDataByPatientId"), _class2), (0, _applyDecoratedDescriptor2["default"])(_class2, "createAnalgesiaData", [_dec3], Object.getOwnPropertyDescriptor(_class2, "createAnalgesiaData"), _class2), (0, _applyDecoratedDescriptor2["default"])(_class2, "updateAnalgesiaData", [_dec4], Object.getOwnPropertyDescriptor(_class2, "updateAnalgesiaData"), _class2), (0, _applyDecoratedDescriptor2["default"])(_class2, "createOrUpdateAnalgesiaData", [_dec5], Object.getOwnPropertyDescriptor(_class2, "createOrUpdateAnalgesiaData"), _class2)), _class2)) || _class);
var _default = AnalgesiaController;
exports["default"] = _default;