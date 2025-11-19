const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const GameItem = sequelize.define('GameItem', {
  item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  item_name: { type: DataTypes.STRING, allowNull: false },
  value_coins: { type: DataTypes.INTEGER, allowNull: false },
  weight_kg: { type: DataTypes.FLOAT, allowNull: false }
});

module.exports = GameItem;