'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');

const User = sequelize.define(
  'User',
  { name: { type: DataTypes.STRING } },
  {
    tableName: 'users',
    timestamps: false,
    allowNull: false,
  }
);

module.exports = { User };
