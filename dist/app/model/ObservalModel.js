"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _EPPlacementPointModel = _interopRequireDefault(require("./EPPlacementPointModel"));

var _ObservalEndPointModel = _interopRequireDefault(require("./ObservalEndPointModel"));

var _SequelizeGenerator = _interopRequireDefault(require("../utils/SequelizeGenerator.js"));

var _DataFormat = require("../utils/DataFormat");

/**
 * @file ObservalModel.js
 */
// Models
// Vendors
var sequelizeInstance = (0, _SequelizeGenerator["default"])(),
    Observal = sequelizeInstance.define('observal_data', {
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
  epPlacementPointId: {
    field: 'ep_placement_point_id',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('epPlacementPointId', (0, _DataFormat.formatNumberField)(value));
    }
  },
  observalEndPointId: {
    field: 'observal_end_point_id',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('observalEndPointId', (0, _DataFormat.formatNumberField)(value));
    }
  },
  cervixFullyDilatedTime: {
    field: 'cervix_fully_dilated_time',
    type: _sequelize["default"].DATE,
    get: function get() {
      (0, _DataFormat.formatResDateTime)(this.getDataValue('cervixFullyDilatedTime'));
    },
    set: function set(value) {
      this.setDataValue('cervixFullyDilatedTime', (0, _DataFormat.formatDateTimeField)(value));
    }
  },
  cervixDilatation: {
    field: 'cervix_dilatation',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('cervixDilatation', (0, _DataFormat.formatNumberField)(value));
    }
  },
  initialTime: {
    field: 'initial_time',
    type: _sequelize["default"].DATE,
    get: function get() {
      (0, _DataFormat.formatResDateTime)(this.getDataValue('initialTime'));
    },
    set: function set(value) {
      this.setDataValue('initialTime', (0, _DataFormat.formatDateTimeField)(value));
    }
  },
  initialDose: {
    field: 'initial_dose',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('initialDose', (0, _DataFormat.formatNumberField)(value));
    }
  },
  pumpConsumption: {
    field: 'pump_consumption',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('pumpConsumption', (0, _DataFormat.formatNumberField)(value));
    }
  },
  bolus: {
    field: 'bolus',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('bolus', (0, _DataFormat.formatNumberField)(value));
    }
  },
  pcaCount: {
    field: 'pca_count',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('pcaCount', (0, _DataFormat.formatNumberField)(value));
    }
  },
  manualBolusCount: {
    field: 'manual_bolus_count',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('manualBolusCount', (0, _DataFormat.formatNumberField)(value));
    }
  },
  firstPcaTime: {
    field: 'first_pca_time',
    type: _sequelize["default"].DATE,
    get: function get() {
      (0, _DataFormat.formatResDateTime)(this.getDataValue('firstPcaTime'));
    },
    set: function set(value) {
      this.setDataValue('firstPcaTime', (0, _DataFormat.formatDateTimeField)(value));
    }
  },
  hasVasoactiveAgent: {
    field: 'has_vasoactive_agent',
    type: _sequelize["default"].BOOLEAN
  },
  firstManualBolusTime: {
    field: 'first_manual_bolus_time',
    type: _sequelize["default"].DATE,
    get: function get() {
      (0, _DataFormat.formatResDateTime)(this.getDataValue('firstManualBolusTime'));
    },
    set: function set(value) {
      this.setDataValue('firstManualBolusTime', (0, _DataFormat.formatDateTimeField)(value));
    }
  },
  hasHypotension: {
    field: 'has_hypotension',
    type: _sequelize["default"].BOOLEAN
  },
  hasCaesareanSection: {
    field: 'has_caesarean_section',
    type: _sequelize["default"].BOOLEAN
  },
  hasInstrumental: {
    field: 'has_instrumental',
    type: _sequelize["default"].BOOLEAN
  },
  hasLateralEpisiotomy: {
    field: 'has_lateral_episiotomy',
    type: _sequelize["default"].BOOLEAN
  },
  birthTime: {
    field: 'birth_time',
    type: _sequelize["default"].DATE,
    get: function get() {
      (0, _DataFormat.formatResDateTime)(this.getDataValue('birthTime'));
    },
    set: function set(value) {
      this.setDataValue('birthTime', (0, _DataFormat.formatDateTimeField)(value));
    }
  },
  foetalWeight: {
    field: 'foetal_weight',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('foetalWeight', (0, _DataFormat.formatNumberField)(value));
    }
  },
  oneMinuteApgarScore: {
    field: 'one_minute_apgar_score',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('oneMinuteApgarScore', (0, _DataFormat.formatNumberField)(value));
    }
  },
  fiveMinuteApgarScore: {
    field: 'five_minute_apgar_score',
    type: _sequelize["default"].INTEGER,
    set: function set(value) {
      this.setDataValue('fiveMinuteApgarScore', (0, _DataFormat.formatNumberField)(value));
    }
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
Observal.belongsTo(_EPPlacementPointModel["default"], {
  as: 'epPlacementPoint',
  foreignKey: 'epPlacementPointId',
  targetKey: 'id'
});
Observal.belongsTo(_ObservalEndPointModel["default"], {
  as: 'observalEndPoint',
  foreignKey: 'observalEndPointId',
  targetKey: 'id'
});
var _default = Observal;
exports["default"] = _default;