const GameItem = require('../models/GameItem');

exports.list = async (req, res) => {
  const items = await GameItem.findAll();
  res.json(items);
};

exports.show = async (req, res) => {
  const item = await GameItem.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
};

exports.create = async (req, res) => {
  try {
    const newItem = await GameItem.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};