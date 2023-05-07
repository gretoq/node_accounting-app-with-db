const { Sequelize } = require('sequelize');
const { development: {
  username,
  password,
  database,
  host,
  dialect,
} } = require('../../config/config.json');

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

module.exports = { sequelize };
