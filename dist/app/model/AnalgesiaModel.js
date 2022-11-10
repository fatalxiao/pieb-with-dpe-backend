"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = _interopRequireDefault(require("sequelize"));
var _SensoryBlockModel = _interopRequireDefault(require("./SensoryBlockModel"));
var _SequelizeGenerator = _interopRequireDefault(require("../utils/SequelizeGenerator.js"));
var _DataFormat = require("../utils/DataFormat");
/**
 * @file AnalgesiaModel.js
 */

// Models

// Vendors

var sequelizeInstance = (0, _SequelizeGenerator["default"])(),
  Analgesia = sequelizeInstance.define('analgesia_data', {
    id: {
      field: 'id',
      type: _sequelize["default"].INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    patientId: {
      field: 'patient_id',
      type: _sequelize["default"].STRING(10)
    },
    timePoint: {
      field: 'time_point',
      type: _sequelize["default"].INTEGER,
      set: function set(value) {
        this.setDataValue('timePoint', (0, _DataFormat.formatNumberField)(value));
      }
    },
    vasScore: {
      field: 'vas_score',
      type: _sequelize["default"].FLOAT,
      set: function set(value) {
        this.setDataValue('vasScore', (0, _DataFormat.formatNumberField)(value));
      }
    },
    thoracicSensoryBlockLeftValue: {
      field: 'thoracic_sensory_block_left_value',
      type: _sequelize["default"].INTEGER,
      set: function set(value) {
        this.setDataValue('thoracicSensoryBlockLeftValue', (0, _DataFormat.formatNumberField)(value));
      }
    },
    thoracicSensoryBlockRightValue: {
      field: 'thoracic_sensory_block_right_value',
      type: _sequelize["default"].INTEGER,
      set: function set(value) {
        this.setDataValue('thoracicSensoryBlockRightValue', (0, _DataFormat.formatNumberField)(value));
      }
    },
    sacralSensoryBlockLeftValue: {
      field: 'sacral_sensory_block_left_value',
      type: _sequelize["default"].INTEGER,
      set: function set(value) {
        this.setDataValue('sacralSensoryBlockLeftValue', (0, _DataFormat.formatNumberField)(value));
      }
    },
    sacralSensoryBlockRightValue: {
      field: 'sacral_sensory_block_right_value',
      type: _sequelize["default"].INTEGER,
      set: function set(value) {
        this.setDataValue('sacralSensoryBlockRightValue', (0, _DataFormat.formatNumberField)(value));
      }
    },
    bromageScore: {
      field: 'bromage_score',
      type: _sequelize["default"].INTEGER,
      set: function set(value) {
        this.setDataValue('bromageScore', (0, _DataFormat.formatNumberField)(value));
      }
    },
    systolicBloodPressure: {
      field: 'systolic_blood_pressure',
      type: _sequelize["default"].INTEGER,
      set: function set(value) {
        this.setDataValue('systolicBloodPressure', (0, _DataFormat.formatNumberField)(value));
      }
    },
    diastolicBloodPressure: {
      field: 'diastolic_blood_pressure',
      type: _sequelize["default"].INTEGER,
      set: function set(value) {
        this.setDataValue('diastolicBloodPressure', (0, _DataFormat.formatNumberField)(value));
      }
    },
    heartRate: {
      field: 'heart_rate',
      type: _sequelize["default"].INTEGER,
      set: function set(value) {
        this.setDataValue('heartRate', (0, _DataFormat.formatNumberField)(value));
      }
    },
    fetalHeartRate: {
      field: 'fetal_heart_rate',
      type: _sequelize["default"].INTEGER,
      set: function set(value) {
        this.setDataValue('fetalHeartRate', (0, _DataFormat.formatNumberField)(value));
      }
    }
  }, {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'ctime',
    updatedAt: 'utime',
    deletedAt: 'dtime',
    paranoid: true
  });
Analgesia.belongsTo(_SensoryBlockModel["default"], {
  as: 'thoracicSensoryBlockLeft',
  foreignKey: 'thoracicSensoryBlockLeftValue',
  targetKey: 'value'
});
Analgesia.belongsTo(_SensoryBlockModel["default"], {
  as: 'thoracicSensoryBlockRight',
  foreignKey: 'thoracicSensoryBlockRightValue',
  targetKey: 'value'
});
Analgesia.belongsTo(_SensoryBlockModel["default"], {
  as: 'sacralSensoryBlockLeft',
  foreignKey: 'sacralSensoryBlockLeftValue',
  targetKey: 'value'
});
Analgesia.belongsTo(_SensoryBlockModel["default"], {
  as: 'sacralSensoryBlockRight',
  foreignKey: 'sacralSensoryBlockRightValue',
  targetKey: 'value'
});
var _default = Analgesia;
exports["default"] = _default;