/**
 * @file ObservalModel.js
 */

import Sequelize from 'sequelize';

// Models
import EPPlacementPoint from './EPPlacementPointModel';
import ObservalEndPoint from './ObservalEndPointModel';

// Vendors
import SequelizeGenerator from '../utils/SequelizeGenerator.js';
import {
    formatNumberField,
    formatDateTimeField,
    formatResDateTime
} from '../utils/DataFormat';

const sequelizeInstance = SequelizeGenerator(),

    Observal = sequelizeInstance.define('observal_data', {
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
        epPlacementPointId: {
            field: 'ep_placement_point_id',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('epPlacementPointId', formatNumberField(value));
            }
        },
        observalEndPointId: {
            field: 'observal_end_point_id',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('observalEndPointId', formatNumberField(value));
            }
        },
        cervixFullyDilatedTime: {
            field: 'cervix_fully_dilated_time',
            type: Sequelize.DATE,
            get() {
                formatResDateTime(this.getDataValue('cervixFullyDilatedTime'));
            },
            set(value) {
                this.setDataValue('cervixFullyDilatedTime', formatDateTimeField(value));
            }
        },
        cervixDilatation: {
            field: 'cervix_dilatation',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('cervixDilatation', formatNumberField(value));
            }
        },
        initialTime: {
            field: 'initial_time',
            type: Sequelize.DATE,
            get() {
                formatResDateTime(this.getDataValue('initialTime'));
            },
            set(value) {
                this.setDataValue('initialTime', formatDateTimeField(value));
            }
        },
        initialDose: {
            field: 'initial_dose',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('initialDose', formatNumberField(value));
            }
        },
        pumpConsumption: {
            field: 'pump_consumption',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('pumpConsumption', formatNumberField(value));
            }
        },
        bolus: {
            field: 'bolus',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('bolus', formatNumberField(value));
            }
        },
        firstPcaTime: {
            field: 'first_pca_time',
            type: Sequelize.DATE,
            get() {
                formatResDateTime(this.getDataValue('firstPcaTime'));
            },
            set(value) {
                this.setDataValue('firstPcaTime', formatDateTimeField(value));
            }
        },
        pcaCount: {
            field: 'pca_count',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('pcaCount', formatNumberField(value));
            }
        },
        firstManualBolusTime: {
            field: 'first_manual_bolus_time',
            type: Sequelize.DATE,
            get() {
                formatResDateTime(this.getDataValue('firstManualBolusTime'));
            },
            set(value) {
                this.setDataValue('firstManualBolusTime', formatDateTimeField(value));
            }
        },
        manualBolusCount: {
            field: 'manual_bolus_count',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('manualBolusCount', formatNumberField(value));
            }
        },
        hasVasoactiveAgent: {
            field: 'has_vasoactive_agent',
            type: Sequelize.BOOLEAN
        },
        hasHypotension: {
            field: 'has_hypotension',
            type: Sequelize.BOOLEAN
        },
        hasCaesareanSection: {
            field: 'has_caesarean_section',
            type: Sequelize.BOOLEAN
        },
        hasInstrumental: {
            field: 'has_instrumental',
            type: Sequelize.BOOLEAN
        },
        hasLateralEpisiotomy: {
            field: 'has_lateral_episiotomy',
            type: Sequelize.BOOLEAN
        },
        birthTime: {
            field: 'birth_time',
            type: Sequelize.DATE,
            get() {
                formatResDateTime(this.getDataValue('birthTime'));
            },
            set(value) {
                this.setDataValue('birthTime', formatDateTimeField(value));
            }
        },
        foetalWeight: {
            field: 'foetal_weight',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('foetalWeight', formatNumberField(value));
            }
        },
        oneMinuteApgarScore: {
            field: 'one_minute_apgar_score',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('oneMinuteApgarScore', formatNumberField(value));
            }
        },
        fiveMinuteApgarScore: {
            field: 'five_minute_apgar_score',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('fiveMinuteApgarScore', formatNumberField(value));
            }
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

Observal.belongsTo(EPPlacementPoint, {
    as: 'ep_placement_point',
    foreignKey: 'ep_placement_point_id',
    targetKey: 'id'
});

Observal.belongsTo(ObservalEndPoint, {
    as: 'observal_end_point',
    foreignKey: 'observal_end_point_id',
    targetKey: 'id'
});

export default Observal;
