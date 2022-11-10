/**
 * @file ObservalEndPointModel.js
 */

import Sequelize from 'sequelize';

// Vendors
import SequelizeGenerator from '../utils/SequelizeGenerator.js';

const sequelizeInstance = SequelizeGenerator();

const ObservalEndPoint = sequelizeInstance.define('observal_end_point', {
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

export default ObservalEndPoint;
