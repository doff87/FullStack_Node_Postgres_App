const PlayerCharacter = require('../models/PlayerCharacter');

exports.list = async (req, res) => {
  const players = await PlayerCharacter.findAll();
  res.json(players);
};

exports.show = async (req, res) => {
  const player = await PlayerCharacter.findByPk(req.params.id);
  if (!player) return res.status(404).json({ error: 'Player not found' });
  res.json(player);
};

exports.create = async (req, res) => {
  try {
    const newPlayer = await PlayerCharacter.create(req.body);
    res.status(201).json(newPlayer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};