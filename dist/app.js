"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _koa = _interopRequireDefault(require("koa"));
var _cors = _interopRequireDefault(require("@koa/cors"));
var _koaStatic = _interopRequireDefault(require("koa-static"));
var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));
var _config = _interopRequireDefault(require("./config.js"));
var _mappingRouterToController = _interopRequireDefault(require("./app/utils/mappingRouterToController.js"));
var _fancyNodeLogger = _interopRequireDefault(require("fancy-node-logger"));
/**
 * @file app.js
 */

// Koa

// Statics

// Vendors

_fancyNodeLogger["default"].wait('Wait start app...\n');
var app = new _koa["default"]();
app.use((0, _cors["default"])()).use((0, _koaStatic["default"])('.')).use((0, _koaBodyparser["default"])()).use((0, _mappingRouterToController["default"])(__dirname)).listen(_config["default"].port, function (error) {
  if (error) {
    console.log(error);
    return;
  }
  _fancyNodeLogger["default"].done("Server started and listen on port ".concat(_config["default"].port));
});