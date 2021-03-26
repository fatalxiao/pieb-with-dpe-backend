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

var _PatientService = _interopRequireDefault(require("../service/PatientService.js"));

var _ExportService = _interopRequireDefault(require("../service/ExportService.js"));

var _ApiDecorator = require("../utils/ApiDecorator");

var _config = require("../../config");

var _nodeXlsx = _interopRequireDefault(require("node-xlsx"));

var _moment = _interopRequireDefault(require("moment"));

var _Response = require("../utils/Response.js");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2;

var PatientController = (_dec = (0, _ApiDecorator.Api)({
  tags: 'Patient'
}), _dec2 = (0, _ApiDecorator.GetMapping)({
  value: "".concat(_config.baseUrl, "/patient/getPatients")
}), _dec3 = (0, _ApiDecorator.GetMapping)({
  value: "".concat(_config.baseUrl, "/patient/getFullPatients")
}), _dec4 = (0, _ApiDecorator.GetMapping)({
  value: "".concat(_config.baseUrl, "/patient/exportPatients")
}), _dec5 = (0, _ApiDecorator.GetMapping)({
  value: "".concat(_config.baseUrl, "/patient/getPatientById/:id")
}), _dec6 = (0, _ApiDecorator.PostMapping)({
  value: "".concat(_config.baseUrl, "/patient/createPatient")
}), _dec7 = (0, _ApiDecorator.PostMapping)({
  value: "".concat(_config.baseUrl, "/patient/updatePatient")
}), _dec8 = (0, _ApiDecorator.PostMapping)({
  value: "".concat(_config.baseUrl, "/patient/createOrUpdatePatient")
}), _dec9 = (0, _ApiDecorator.PostMapping)({
  value: "".concat(_config.baseUrl, "/patient/enable/:id")
}), _dec10 = (0, _ApiDecorator.PostMapping)({
  value: "".concat(_config.baseUrl, "/patient/disable/:id")
}), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function PatientController() {
    (0, _classCallCheck2["default"])(this, PatientController);
  }

  (0, _createClass2["default"])(PatientController, null, [{
    key: "verifyCreateData",
    value:
    /**
     * 校验创建时的 request 数据
     * @param requestData
     * @returns {string}
     */
    function verifyCreateData(requestData) {
      if (!requestData) {
        return (0, _Response.buildParamError)('Request Data is required');
      } else if (!requestData.id) {
        return (0, _Response.buildParamError)('ID is required');
      } else if (!requestData.groupId) {
        return (0, _Response.buildParamError)('Group is required');
      } else if (!requestData.name) {
        return (0, _Response.buildParamError)('Name is required');
      }
    }
    /**
     * 校验更新时的 request 数据
     * @param requestData
     * @returns {string}
     */

  }, {
    key: "verifyUpdateData",
    value: function verifyUpdateData(requestData) {
      if (!requestData) {
        return (0, _Response.buildParamError)('Request Data is required');
      } else if (!requestData.id) {
        return (0, _Response.buildParamError)('ID is required');
      }
    }
    /**
     * 获取用于列表的 Patients 数据
     * @param ctx
     * @returns {Promise<void>}
     */

  }, {
    key: "getPatients",
    value: function () {
      var _getPatients = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _PatientService["default"].getPatients();

              case 2:
                ctx.response.body = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getPatients(_x) {
        return _getPatients.apply(this, arguments);
      }

      return getPatients;
    }()
    /**
     * 获取完全的 Patients 数据
     * @param ctx
     * @returns {Promise<void>}
     */

  }, {
    key: "getFullPatients",
    value: function () {
      var _getFullPatients = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(ctx) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _PatientService["default"].getFullPatients();

              case 2:
                ctx.response.body = _context2.sent;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getFullPatients(_x2) {
        return _getFullPatients.apply(this, arguments);
      }

      return getFullPatients;
    }()
    /**
     * 导出 excel 数据
     * @param ctx
     * @returns {Promise<void>}
     */

  }, {
    key: "exportPatients",
    value: function () {
      var _exportPatients = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(ctx) {
        var _yield$ExportService$, piebOptimalIntervalData;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _ExportService["default"].getExportData();

              case 2:
                _yield$ExportService$ = _context3.sent;
                piebOptimalIntervalData = _yield$ExportService$.piebOptimalIntervalData;
                ctx.set('Content-Type', 'application/vnd.openxmlformats');
                ctx.set('Content-Disposition', "attachment;filename=PIEB optimal interval data ".concat((0, _moment["default"])().format('YYYY-MM-DD'), ".xlsx"));
                ctx.response.body = _nodeXlsx["default"].build([{
                  name: 'PIEB optimal interval',
                  data: piebOptimalIntervalData
                }]);

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function exportPatients(_x3) {
        return _exportPatients.apply(this, arguments);
      }

      return exportPatients;
    }()
    /**
     * 根据 ID 获取 Patient 数据
     * @param ctx
     * @returns {Promise<string>}
     */

  }, {
    key: "getPatientById",
    value: function () {
      var _getPatientById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(ctx) {
        var id;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = ctx.params.id;

                if (id) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return", ctx.response.body = (0, _Response.buildParamError)('Patient ID is required'));

              case 3:
                _context4.next = 5;
                return _PatientService["default"].getPatientById(id);

              case 5:
                ctx.response.body = _context4.sent;

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getPatientById(_x4) {
        return _getPatientById.apply(this, arguments);
      }

      return getPatientById;
    }()
    /**
     * 创建一条 Patient 数据
     * @param ctx
     * @returns {Promise<string>}
     */

  }, {
    key: "createPatient",
    value: function () {
      var _createPatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(ctx) {
        var requestData, error;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                requestData = ctx.request.body;
                error = PatientController.verifyCreateData(requestData);

                if (!error) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return", ctx.response.body = error);

              case 4:
                _context5.next = 6;
                return _PatientService["default"].createPatient(requestData);

              case 6:
                ctx.response.body = _context5.sent;

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function createPatient(_x5) {
        return _createPatient.apply(this, arguments);
      }

      return createPatient;
    }()
    /**
     * 更新一条 Patient 数据
     * @param ctx
     * @returns {Promise<string>}
     */

  }, {
    key: "updatePatient",
    value: function () {
      var _updatePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(ctx) {
        var requestData, error;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                requestData = ctx.request.body;
                error = PatientController.verifyUpdateData(requestData);

                if (!error) {
                  _context6.next = 4;
                  break;
                }

                return _context6.abrupt("return", ctx.response.body = error);

              case 4:
                _context6.next = 6;
                return _PatientService["default"].updatePatient(requestData);

              case 6:
                ctx.response.body = _context6.sent;

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function updatePatient(_x6) {
        return _updatePatient.apply(this, arguments);
      }

      return updatePatient;
    }()
    /**
     * 创建或更新一条 Patient 数据
     * @param ctx
     * @returns {Promise<string>}
     */

  }, {
    key: "createOrUpdatePatient",
    value: function () {
      var _createOrUpdatePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(ctx) {
        var requestData, error;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                requestData = ctx.request.body;
                error = PatientController.verifyUpdateData(requestData);

                if (!error) {
                  _context7.next = 4;
                  break;
                }

                return _context7.abrupt("return", ctx.response.body = error);

              case 4:
                _context7.next = 6;
                return _PatientService["default"].createOrUpdatePatient(requestData);

              case 6:
                ctx.response.body = _context7.sent;

              case 7:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function createOrUpdatePatient(_x7) {
        return _createOrUpdatePatient.apply(this, arguments);
      }

      return createOrUpdatePatient;
    }()
    /**
     * 启用某个 ID 的 Patient
     * @param ctx
     * @returns {Promise<string>}
     */

  }, {
    key: "enablePatient",
    value: function () {
      var _enablePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(ctx) {
        var id;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                id = ctx.params.id;

                if (id) {
                  _context8.next = 3;
                  break;
                }

                return _context8.abrupt("return", ctx.response.body = (0, _Response.buildParamError)('Patient ID is required'));

              case 3:
                _context8.next = 5;
                return _PatientService["default"].enablePatient(ctx.params.id);

              case 5:
                ctx.response.body = _context8.sent;

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function enablePatient(_x8) {
        return _enablePatient.apply(this, arguments);
      }

      return enablePatient;
    }()
    /**
     * 禁用某个 ID 的 Patient
     * @param ctx
     * @returns {Promise<string>}
     */

  }, {
    key: "disablePatient",
    value: function () {
      var _disablePatient = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(ctx) {
        var id;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                id = ctx.params.id;

                if (id) {
                  _context9.next = 3;
                  break;
                }

                return _context9.abrupt("return", ctx.response.body = (0, _Response.buildParamError)('Patient ID is required'));

              case 3:
                _context9.next = 5;
                return _PatientService["default"].disablePatient(id);

              case 5:
                ctx.response.body = _context9.sent;

              case 6:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function disablePatient(_x9) {
        return _disablePatient.apply(this, arguments);
      }

      return disablePatient;
    }()
  }]);
  return PatientController;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class2, "getPatients", [_dec2], Object.getOwnPropertyDescriptor(_class2, "getPatients"), _class2), (0, _applyDecoratedDescriptor2["default"])(_class2, "getFullPatients", [_dec3], Object.getOwnPropertyDescriptor(_class2, "getFullPatients"), _class2), (0, _applyDecoratedDescriptor2["default"])(_class2, "exportPatients", [_dec4], Object.getOwnPropertyDescriptor(_class2, "exportPatients"), _class2), (0, _applyDecoratedDescriptor2["default"])(_class2, "getPatientById", [_dec5], Object.getOwnPropertyDescriptor(_class2, "getPatientById"), _class2), (0, _applyDecoratedDescriptor2["default"])(_class2, "createPatient", [_dec6], Object.getOwnPropertyDescriptor(_class2, "createPatient"), _class2), (0, _applyDecoratedDescriptor2["default"])(_class2, "updatePatient", [_dec7], Object.getOwnPropertyDescriptor(_class2, "updatePatient"), _class2), (0, _applyDecoratedDescriptor2["default"])(_class2, "createOrUpdatePatient", [_dec8], Object.getOwnPropertyDescriptor(_class2, "createOrUpdatePatient"), _class2), (0, _applyDecoratedDescriptor2["default"])(_class2, "enablePatient", [_dec9], Object.getOwnPropertyDescriptor(_class2, "enablePatient"), _class2), (0, _applyDecoratedDescriptor2["default"])(_class2, "disablePatient", [_dec10], Object.getOwnPropertyDescriptor(_class2, "disablePatient"), _class2)), _class2)) || _class);
var _default = PatientController;
exports["default"] = _default;