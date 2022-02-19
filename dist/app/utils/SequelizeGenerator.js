"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.generateSequelize = generateSequelize;

var _sequelize = require("sequelize");

var _config = _interopRequireDefault(require("../../config.js"));

/**
 * @file SequelizeGenerator.js
 */
// Statics
var databaseConfig = _config["default"].database;
var sequelize;
/**
 * 生成 Sequelize 实例并初始化
 * @returns {*}
 */

function generateSequelize() {
  if (sequelize) {
    return sequelize;
  }

  return sequelize = new _sequelize.Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, {
    host: databaseConfig.host,
    port: databaseConfig.port,
    dialect: 'mysql',
    freezeTableName: true,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      underscored: true
    },
    timezone: '+08:00'
  });
}

var _default = generateSequelize;
exports["default"] = _default;