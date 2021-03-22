"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.database = exports.baseUrl = exports.port = void 0;

/**
 * @file config.js
 */

/**
 * app 启动的端口号
 * @type {number}
 */
var port = 4100;
/**
 * request 的 base url
 * @type {string}
 */

exports.port = port;
var baseUrl = '/pieb-with-dpe';
/**
 * 数据库连接配置
 * @type {{charset: string, database: string, port: number, host: string, username: string}}
 */

exports.baseUrl = baseUrl;
var database = {
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'pieb_with_dpe',
  charset: 'UTF8_BIM'
};
exports.database = database;
var _default = {
  port: port,
  baseUrl: baseUrl,
  database: database
};
exports["default"] = _default;