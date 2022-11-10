/**
 * @file PatientModel.js
 */

import Sequelize from 'sequelize';

// Models
import PatientGroup from './PatientGroupModel';
import Analgesia from './AnalgesiaModel';
import Observal from './ObservalModel';

// Vendors
import SequelizeGenerator from '../utils/SequelizeGenerator.js';
import {formatNumberField} from '../utils/DataFormat';

const sequelizeInstance = SequelizeGenerator();

const Patient = sequelizeInstance.define('patients', {
    id: {
        field: 'id',
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    groupId: {
        field: 'group_id',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('groupId', formatNumberField(value));
        }
    },
    name: {
        field: 'name',
        type: Sequelize.STRING(30)
    },
    age: {
        field: 'age',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('age', formatNumberField(value));
        }
    },
    gestationalDays: {
        field: 'gestational_days',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('gestationalDays', formatNumberField(value));
        }
    },
    height: {
        field: 'height',
        type: Sequelize.FLOAT,
        set(value) {
            this.setDataValue('height', formatNumberField(value));
        }
    },
    weight: {
        field: 'weight',
        type: Sequelize.FLOAT,
        set(value) {
            this.setDataValue('weight', formatNumberField(value));
        }
    },
    initialVasScore: {
        field: 'initial_vas_score',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('initialVasScore', formatNumberField(value));
        }
    },
    heartRate: {
        field: 'heart_rate',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('heartRate', formatNumberField(value));
        }
    },
    systolicBloodPressure: {
        field: 'systolic_blood_pressure',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('systolicBloodPressure', formatNumberField(value));
        }
    },
    diastolicBloodPressure: {
        field: 'diastolic_blood_pressure',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('diastolicBloodPressure', formatNumberField(value));
        }
    },
    fetalHeartRate: {
        field: 'fetal_heart_rate',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('fetalHeartRate', formatNumberField(value));
        }
    },
    pulseOxygenSaturation: {
        field: 'pulse_oxygen_saturation',
        type: Sequelize.FLOAT,
        set(value) {
            this.setDataValue('pulseOxygenSaturation', formatNumberField(value));
        }
    },
    cervicalDilationAtTimeOfEA: {
        field: 'cervical_dilation_at_time_of_ea',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('cervicalDilationAtTimeOfEA', formatNumberField(value));
        }
    },
    hasOxytocinAtTimeOfEA: {
        field: 'has_oxytocin_at_time_of_ea',
        type: Sequelize.BOOLEAN
    },
    hasInduction: {
        field: 'has_induction',
        type: Sequelize.BOOLEAN
    },
    status: {
        field: 'status',
        type: Sequelize.INTEGER
    },
    description: {
        field: 'description',
        type: Sequelize.STRING(1000)
    }
}, {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'ctime',
    updatedAt: 'utime',
    deletedAt: 'dtime',
    paranoid: true
});

Patient.belongsTo(PatientGroup, {
    as: 'group',
    foreignKey: 'groupId'
});

Patient.hasMany(Analgesia, {
    as: 'analgesia',
    foreignKey: 'patient_id',
    targetKey: 'id'
});

Patient.hasOne(Observal, {
    as: 'observal',
    foreignKey: 'patient_id',
    targetKey: 'id'
});

export default Patient;
