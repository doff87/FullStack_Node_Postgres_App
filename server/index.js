const express = require('express');
const cors = require('cors');
const sequelize = require('./db');
const PlayerCharacter = require('./models/PlayerCharacter');
const GameItem = require('./models/GameItem');
const Enemy = require('./models/Enemy');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/players', require('./routes/playerRoutes'));
app.use('/api/items', require('./routes/itemRoutes'));
app.use('/api/enemies', require('./routes/enemyRoutes'));

sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(5000, () => console.log('Server running on port 5000'));
});