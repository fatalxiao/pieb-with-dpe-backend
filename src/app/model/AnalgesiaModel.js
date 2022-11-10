/**
 * @file AnalgesiaModel.js
 */

import Sequelize from 'sequelize';

// Models
import SensoryBlock from './SensoryBlockModel';

// Vendors
import SequelizeGenerator from '../utils/SequelizeGenerator.js';
import {formatNumberField} from '../utils/DataFormat';

const sequelizeInstance = SequelizeGenerator();

const Analgesia = sequelizeInstance.define('analgesia_data', {
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    patientId: {
        field: 'patient_id',
        type: Sequelize.STRING(10)
    },
    timePoint: {
        field: 'time_point',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('timePoint', formatNumberField(value));
        }
    },
    vasScore: {
        field: 'vas_score',
        type: Sequelize.FLOAT,
        set(value) {
            this.setDataValue('vasScore', formatNumberField(value));
        }
    },
    thoracicSensoryBlockLeftValue: {
        field: 'thoracic_sensory_block_left_value',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('thoracicSensoryBlockLeftValue', formatNumberField(value));
        }
    },
    thoracicSensoryBlockRightValue: {
        field: 'thoracic_sensory_block_right_value',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('thoracicSensoryBlockRightValue', formatNumberField(value));
        }
    },
    sacralSensoryBlockLeftValue: {
        field: 'sacral_sensory_block_left_value',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('sacralSensoryBlockLeftValue', formatNumberField(value));
        }
    },
    sacralSensoryBlockRightValue: {
        field: 'sacral_sensory_block_right_value',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('sacralSensoryBlockRightValue', formatNumberField(value));
        }
    },
    bromageScore: {
        field: 'bromage_score',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('bromageScore', formatNumberField(value));
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
    heartRate: {
        field: 'heart_rate',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('heartRate', formatNumberField(value));
        }
    },
    fetalHeartRate: {
        field: 'fetal_heart_rate',
        type: Sequelize.INTEGER,
        set(value) {
            this.setDataValue('fetalHeartRate', formatNumberField(value));
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

Analgesia.belongsTo(SensoryBlock, {
    as: 'thoracicSensoryBlockLeft',
    foreignKey: 'thoracicSensoryBlockLeftValue',
    targetKey: 'value'
});

Analgesia.belongsTo(SensoryBlock, {
    as: 'thoracicSensoryBlockRight',
    foreignKey: 'thoracicSensoryBlockRightValue',
    targetKey: 'value'
});

Analgesia.belongsTo(SensoryBlock, {
    as: 'sacralSensoryBlockLeft',
    foreignKey: 'sacralSensoryBlockLeftValue',
    targetKey: 'value'
});

Analgesia.belongsTo(SensoryBlock, {
    as: 'sacralSensoryBlockRight',
    foreignKey: 'sacralSensoryBlockRightValue',
    targetKey: 'value'
});

export default Analgesia;
