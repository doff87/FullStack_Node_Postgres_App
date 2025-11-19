// testConnection.js
const { Sequelize } = require('sequelize');
const config = require('./config/config.json');

const env = 'development';
const { username, password, database, host, dialect, port } = config[env];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  port,
  logging: false,
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅  Connection to PostgreSQL has been established successfully.');
  } catch (error) {
    console.error('❌  Unable to connect to the database:', error);
  } finally {
    await sequelize.close();
  }
}

testConnection();
