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
var _PatientGroupService = _interopRequireDefault(require("../service/PatientGroupService.js"));
var _ApiDecorator = require("../utils/ApiDecorator.js");
var _config = require("../../config");
var _dec, _dec2, _class, _class2;
var PatientGroupController = (_dec = (0, _ApiDecorator.Api)({
  tags: 'PatientGroup'
}), _dec2 = (0, _ApiDecorator.GetMapping)({
  value: "".concat(_config.baseUrl, "/patientGroup/getPatientGroups")
}), _dec(_class = (_class2 = /*#__PURE__*/function () {
  function PatientGroupController() {
    (0, _classCallCheck2["default"])(this, PatientGroupController);
  }
  (0, _createClass2["default"])(PatientGroupController, null, [{
    key: "getPatientGroups",
    value:
    /**
     * 获取所有 patient groups 的数据
     * @param ctx
     * @returns {Promise<void>}
     */
    function () {
      var _getPatientGroups = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(ctx) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _PatientGroupService["default"].getPatientGroups();
              case 2:
                ctx.response.body = _context.sent;
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      function getPatientGroups(_x) {
        return _getPatientGroups.apply(this, arguments);
      }
      return getPatientGroups;
    }()
  }]);
  return PatientGroupController;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class2, "getPatientGroups", [_dec2], Object.getOwnPropertyDescriptor(_class2, "getPatientGroups"), _class2)), _class2)) || _class);
var _default = PatientGroupController;
exports["default"] = _default;