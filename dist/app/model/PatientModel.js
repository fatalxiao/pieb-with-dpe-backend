"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _PatientGroupModel = _interopRequireDefault(require("./PatientGroupModel"));

var _AnalgesiaModel = _interopRequireDefault(require("./AnalgesiaModel"));

var _ObservalModel = _interopRequireDefault(require("./ObservalModel"));

var _SequelizeGenerator = _interopRequireDefault(require("../utils/SequelizeGenerator.js"));

var _DataFormat = require("../utils/DataFormat");

/**
 * @file PatientModel.js
 */
// Models
// Vendors
var sequelizeInstance = (0, _SequelizeGenerator["default"])(),
    Patient = sequelizeInstance.define('patients', {
  id: {
    field: 'id',
    type: _sequelize["default"].STRING(10),
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  groupId: {
    field: 'group_id',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('groupId', (0, _DataFormat.formatNumberField)(value));
    }
  },
  name: {
    field: 'name',
    type: _sequelize["default"].STRING(30)
  },
  age: {
    field: 'age',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('age', (0, _DataFormat.formatNumberField)(value));
    }
  },
  gestationalDays: {
    field: 'gestational_days',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('gestationalDays', (0, _DataFormat.formatNumberField)(value));
    }
  },
  height: {
    field: 'height',
    type: _sequelize["default"].FLOAT,
    set: function set(value) {
      this.setDataValue('height', (0, _DataFormat.formatNumberField)(value));
    }
  },
  weight: {
    field: 'weight',
    type: _sequelize["default"].FLOAT,
    set: function set(value) {
      this.setDataValue('weight', (0, _DataFormat.formatNumberField)(value));
    }
  },
  initialVasScore: {
    field: 'initial_vas_score',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('initialVasScore', (0, _DataFormat.formatNumberField)(value));
    }
  },
  heartRate: {
    field: 'heart_rate',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('heartRate', (0, _DataFormat.formatNumberField)(value));
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
  fetalHeartRate: {
    field: 'fetal_heart_rate',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('fetalHeartRate', (0, _DataFormat.formatNumberField)(value));
    }
  },
  pulseOxygenSaturation: {
    field: 'pulse_oxygen_saturation',
    type: _sequelize["default"].FLOAT,
    set: function set(value) {
      this.setDataValue('pulseOxygenSaturation', (0, _DataFormat.formatNumberField)(value));
    }
  },
  cervicalDilationAtTimeOfEA: {
    field: 'cervical_dilation_at_time_of_ea',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('cervicalDilationAtTimeOfEA', (0, _DataFormat.formatNumberField)(value));
    }
  },
  hasOxytocinAtTimeOfEA: {
    field: 'has_oxytocin_at_time_of_ea',
    type: _sequelize["default"].BOOLEAN
  },
  hasInduction: {
    field: 'has_induction',
    type: _sequelize["default"].BOOLEAN
  },
  status: {
    field: 'status',
    type: _sequelize["default"].INTEGER
  },
  description: {
    field: 'description',
    type: _sequelize["default"].STRING(1000)
  }
}, {
  freezeTableName: true,
  timestamps: true,
  createdAt: 'ctime',
  updatedAt: 'utime',
  deletedAt: 'dtime',
  paranoid: true
});
Patient.belongsTo(_PatientGroupModel["default"], {
  as: 'group',
  foreignKey: 'groupId'
});
Patient.hasMany(_AnalgesiaModel["default"], {
  as: 'analgesia',
  foreignKey: 'patient_id',
  targetKey: 'id'
});
Patient.hasOne(_ObservalModel["default"], {
  as: 'observal',
  foreignKey: 'patient_id',
  targetKey: 'id'
});
var _default = Patient;
exports["default"] = _default;