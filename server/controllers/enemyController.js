const Enemy = require('../models/Enemy');

exports.list = async (req, res) => {
  const enemies = await Enemy.findAll();
  res.json(enemies);
};

exports.show = async (req, res) => {
  const enemy = await Enemy.findByPk(req.params.id);
  if (!enemy) return res.status(404).json({ error: 'Enemy not found' });
  res.json(enemy);
};

exports.create = async (req, res) => {
  try {
    const newEnemy = await Enemy.create(req.body);
    res.status(201).json(newEnemy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};