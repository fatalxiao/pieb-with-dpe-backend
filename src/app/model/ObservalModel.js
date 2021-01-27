import Sequelize from 'sequelize';

import SequelizeGenerator from '../utils/SequelizeGenerator.js';
import DataFormat from '../utils/DataFormat';

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
        initialTime: {
            field: 'initial_time',
            type: Sequelize.DATE,
            get() {
                return DataFormat.formatResDateTime(this.getDataValue('initialTime'));
            },
            set(value) {
                this.setDataValue('initialTime', DataFormat.formatDateTimeField(value));
            }
        },
        initialDose: {
            field: 'initial_dose',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('initialDose', DataFormat.formatNumberField(value));
            }
        },
        pumpConsumption: {
            field: 'pump_consumption',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('pumpConsumption', DataFormat.formatNumberField(value));
            }
        },
        bolus: {
            field: 'bolus',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('bolus', DataFormat.formatNumberField(value));
            }
        },
        firstPcaTime: {
            field: 'first_pca_time',
            type: Sequelize.DATE,
            get() {
                return DataFormat.formatResDateTime(this.getDataValue('firstPcaTime'));
            },
            set(value) {
                this.setDataValue('firstPcaTime', DataFormat.formatDateTimeField(value));
            }
        },
        pcaCount: {
            field: 'pca_count',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('pcaCount', DataFormat.formatNumberField(value));
            }
        },
        firstManualBolusTime: {
            field: 'first_manual_bolus_time',
            type: Sequelize.DATE,
            get() {
                return DataFormat.formatResDateTime(this.getDataValue('firstManualBolusTime'));
            },
            set(value) {
                this.setDataValue('firstManualBolusTime', DataFormat.formatDateTimeField(value));
            }
        },
        manualBolusCount: {
            field: 'manual_bolus_count',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('manualBolusCount', DataFormat.formatNumberField(value));
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
                return DataFormat.formatResDateTime(this.getDataValue('birthTime'));
            },
            set(value) {
                this.setDataValue('birthTime', DataFormat.formatDateTimeField(value));
            }
        },
        foetalWeight: {
            field: 'foetal_weight',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('foetalWeight', DataFormat.formatNumberField(value));
            }
        },
        oneMinuteApgarScore: {
            field: 'one_minute_apgar_score',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('oneMinuteApgarScore', DataFormat.formatNumberField(value));
            }
        },
        fiveMinuteApgarScore: {
            field: 'five_minute_apgar_score',
            type: Sequelize.INTEGER,
            set(value) {
                this.setDataValue('fiveMinuteApgarScore', DataFormat.formatNumberField(value));
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

export default Observal;
