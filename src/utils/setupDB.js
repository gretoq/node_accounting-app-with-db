'use strict';

const { Expense } = require('../models/Expense');
const { User } = require('../models/User');

const setupDatabase = async() => {
  await Expense.sync({ force: true });
  await User.sync({ force: true });
};

module.exports = { setupDatabase };
