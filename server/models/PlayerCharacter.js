const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const PlayerCharacter = sequelize.define('PlayerCharacter', {
  player_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false },
  level: { type: DataTypes.INTEGER, allowNull: false },
  is_online: { type: DataTypes.BOOLEAN, defaultValue: false }
});

module.exports = PlayerCharacter;