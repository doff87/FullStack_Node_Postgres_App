const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('game_db', 'postgres', '@dub541IFE', {
  host: '127.0.0.1',
  dialect: 'postgres',
  port: 5432,
  logging: false, // optional: hides SQL logs in terminal
});

module.exports = sequelize;