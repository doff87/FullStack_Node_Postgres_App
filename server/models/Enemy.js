const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Enemy = sequelize.define('Enemy', {
  enemy_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  enemy_name: { type: DataTypes.STRING, allowNull: false },
  is_ranged: { type: DataTypes.BOOLEAN, defaultValue: false },
  experience_points: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Enemy;