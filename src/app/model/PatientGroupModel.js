/**
 * @file PatientGroupModel.js
 */

import Sequelize from 'sequelize';

// Vendors
import SequelizeGenerator from '../utils/SequelizeGenerator.js';

const sequelizeInstance = SequelizeGenerator();

const PatientGroup = sequelizeInstance.define('patient_group', {
    id: {
        field: 'id',
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        field: 'name',
        type: Sequelize.STRING(20)
    }
}, {
    freezeTableName: true,
    timestamps: false
});

export default PatientGroup;
