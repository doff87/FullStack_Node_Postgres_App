# Full-Stack Node.js + PostgreSQL Web Application

## Overview
This project is a full-stack web application built using Node.js, Express, PostgreSQL, and Sequelize ORM. It includes a RESTful API, database migrations, model-driven architecture, and HTML-based frontend pages for interacting with three distinct data models: PlayerCharacters, GameItems, and Enemies.
The application demonstrates foundational full-stack concepts, including API development, database integration, cloud deployment, and client-server interaction.

This project was also deployed using AWS EC2 (server) and AWS RDS (PostgreSQL database).

---

## Features

Backend (Node.js / Express)
- RESTful API routes for all models
- Controllers for handling CRUD operations
- Sequelize models, migrations, and schema validation
- Modular routing structure
- Data persistence with PostgreSQL

Database (PostgreSQL + Sequelize ORM)
- Three normalized tables:
  - PlayerCharacters
  - GameItems
  - Enemies
- Sequelize migrations used for schema versioning
- Cloud database compatibility (AWS RDS)

Frontend (HTML + JS)
- Simple HTML pages served from /public
- Form-based creation of new entries
- Dynamic data loading from backend API using the Fetch API
- Lightweight CSS for layout and readability

Deployment
- Hosted on AWS EC2 instance
- PostgreSQL database hosted on AWS RDS
- PM2 used for persistent server process management

---

## Data Models

PlayerCharacters
- player_id: INTEGER, primary key, autoincrement
- username: STRING, required
- level: INTEGER, required
- is_online: BOOLEAN, default false

GameItems
- item_id: INTEGER, primary key, autoincrement
- item_name: STRING, required
- value_coins: INTEGER, required
- weight_kg: FLOAT, required

Enemies
- enemy_id: INTEGER, primary key, autoincrement
- enemy_name: STRING, required
- is_ranged: BOOLEAN, required
- experience_points: INTEGER, required

---

## Project Structure

server/
  controllers/
    enemyController.js
    itemController.js
    playerController.js
  models/
    Enemy.js
    GameItem.js
    PlayerCharacter.js
  routes/
    enemyRoutes.js
    itemRoutes.js
    playerRoutes.js
  migrations/
  public/
    index.html
    PlayerCharacters.html
    GameItems.html
    Enemies.html
    style.css
  db.js
  index.js

---

## How to Run Locally

1. Install dependencies
   npm install

2. Create a PostgreSQL database
   CREATE DATABASE game_db;

3. Edit config/config.json to match your local credentials
   Example:
   {
     "development": {
       "username": "postgres",
       "password": "your_password",
       "database": "game_db",
       "host": "127.0.0.1",
       "dialect": "postgres",
       "port": 5432
     }
   }

4. Run migrations
   npx sequelize-cli db:migrate

5. Start the server
   npm run dev

6. Open the frontend in your browser
   http://localhost:5000/index.html

---

## Key Challenges and Solutions

Connecting to AWS RDS:
- Required configuring dialectOptions.ssl for encrypted connections.
- Adjusted AWS security groups to allow EC2 inbound access.
- Verified connectivity via psql before using Sequelize.

Managing EC2 Deployment:
- Installed Node and NPM on Ubuntu server.
- Used PM2 for long-running server process.
- Configured inbound EC2 security rules for port 5000.

Handling API Requests:
- Enabled CORS in Express.
- Ensured Fetch API pointed to correct public EC2 IP.
- Fixed incorrect endpoint paths in HTML pages.

---

## Future Enhancements

- Full CRUD frontend (Add, Edit, Delete)
- React frontend option
- Authentication system with JWT
- Dockerization for backend/database
- CI/CD with GitHub Actions

---

## Author

David Offutt
Computer Science Student
Lake Washington Institute of Technology
GitHub: https://github.com/doff87
GitHub Portfolio: https://github.com/doff87/CS\_Portfolio