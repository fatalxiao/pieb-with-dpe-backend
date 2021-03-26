/**
 * @file ObservalModel.js
 */

import Sequelize from 'sequelize';

// Models
import EPPlacementPoint from './EPPlacementPointModel';
import ObservalEndPoint from './ObservalEndPointModel';

// Vendors
import SequelizeGenerator from '../utils/SequelizeGenerator.js';
import {formatNumberField} from '../utils/DataFormat';

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
            type: Sequelize.STRING(8)
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
            type: Sequelize.STRING(8)
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
        pcaCount: {
            field: 'pca_count',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('pcaCount', formatNumberField(value));
            }
        },
        manualBolusCount: {
            field: 'manual_bolus_count',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('manualBolusCount', formatNumberField(value));
            }
        },
        firstPcaTime: {
            field: 'first_pca_time',
            type: Sequelize.STRING(8)
        },
        hasVasoactiveAgent: {
            field: 'has_vasoactive_agent',
            type: Sequelize.BOOLEAN
        },
        firstManualBolusTime: {
            field: 'first_manual_bolus_time',
            type: Sequelize.STRING(8)
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
            type: Sequelize.STRING(8)
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
    as: 'epPlacementPoint',
    foreignKey: 'epPlacementPointId',
    targetKey: 'id'
});

Observal.belongsTo(ObservalEndPoint, {
    as: 'observalEndPoint',
    foreignKey: 'observalEndPointId',
    targetKey: 'id'
});

export default Observal;
