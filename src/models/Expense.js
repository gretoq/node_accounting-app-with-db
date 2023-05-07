'use strict';

const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/db');

const Expense = sequelize.define(
  'Expense',
  {
    userId: { type: DataTypes.INTEGER },
    spentAt: { type: DataTypes.DATE },
    title: { type: DataTypes.STRING },
    amount: { type: DataTypes.INTEGER },
    category: { type: DataTypes.STRING },
    note: { type: DataTypes.STRING },
  }, {
    tableName: 'expenses',
    timestamps: false,
    allowNull: false,
  },
);

module.exports = { Expense };
