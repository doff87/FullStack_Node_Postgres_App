\# Full-Stack Node.js + PostgreSQL Web Application



\## Overview

This project is a full-stack web application built using Node.js, Express, PostgreSQL, and Sequelize ORM. It includes a RESTful API, database migrations, model-driven architecture, and HTML-based frontend pages for interacting with three distinct data models: PlayerCharacters, GameItems, and Enemies.

The application demonstrates foundational full-stack concepts including API development, database integration, cloud deployment, and client-server interaction.



This project was also deployed using AWS EC2 (server) and AWS RDS (PostgreSQL database).



---



\## Features



Backend (Node.js / Express)

\- RESTful API routes for all models

\- Controllers for handling CRUD operations

\- Sequelize models, migrations, and schema validation

\- Modular routing structure

\- Data persistence with PostgreSQL



Database (PostgreSQL + Sequelize ORM)

\- Three normalized tables:

&nbsp; - PlayerCharacters

&nbsp; - GameItems

&nbsp; - Enemies

\- Sequelize migrations used for schema versioning

\- Cloud database compatibility (AWS RDS)



Frontend (HTML + JS)

\- Simple HTML pages served from /public

\- Form-based creation of new entries

\- Dynamic data loading from backend API using the Fetch API

\- Lightweight CSS for layout and readability



Deployment

\- Hosted on AWS EC2 instance

\- PostgreSQL database hosted on AWS RDS

\- PM2 used for persistent server process management



---



\## Data Models



PlayerCharacters

\- player\_id: INTEGER, primary key, autoincrement

\- username: STRING, required

\- level: INTEGER, required

\- is\_online: BOOLEAN, default false



GameItems

\- item\_id: INTEGER, primary key, autoincrement

\- item\_name: STRING, required

\- value\_coins: INTEGER, required

\- weight\_kg: FLOAT, required



Enemies

\- enemy\_id: INTEGER, primary key, autoincrement

\- enemy\_name: STRING, required

\- is\_ranged: BOOLEAN, required

\- experience\_points: INTEGER, required



---



\## Project Structure



server/

&nbsp; controllers/

&nbsp;   enemyController.js

&nbsp;   itemController.js

&nbsp;   playerController.js

&nbsp; models/

&nbsp;   Enemy.js

&nbsp;   GameItem.js

&nbsp;   PlayerCharacter.js

&nbsp; routes/

&nbsp;   enemyRoutes.js

&nbsp;   itemRoutes.js

&nbsp;   playerRoutes.js

&nbsp; migrations/

&nbsp; public/

&nbsp;   index.html

&nbsp;   PlayerCharacters.html

&nbsp;   GameItems.html

&nbsp;   Enemies.html

&nbsp;   style.css

&nbsp; db.js

&nbsp; index.js



---



\## How to Run Locally



1\. Install dependencies

&nbsp;  npm install



2\. Create a PostgreSQL database

&nbsp;  CREATE DATABASE game\_db;



3\. Edit config/config.json to match your local credentials

&nbsp;  Example:

&nbsp;  {

&nbsp;    "development": {

&nbsp;      "username": "postgres",

&nbsp;      "password": "your\_password",

&nbsp;      "database": "game\_db",

&nbsp;      "host": "127.0.0.1",

&nbsp;      "dialect": "postgres",

&nbsp;      "port": 5432

&nbsp;    }

&nbsp;  }



4\. Run migrations

&nbsp;  npx sequelize-cli db:migrate



5\. Start the server

&nbsp;  npm run dev



6\. Open the frontend in your browser

&nbsp;  http://localhost:5000/index.html



---



\## Key Challenges and Solutions



Connecting to AWS RDS:

\- Required configuring dialectOptions.ssl for encrypted connections.

\- Adjusted AWS security groups to allow EC2 inbound access.

\- Verified connectivity via psql before using Sequelize.



Managing EC2 Deployment:

\- Installed Node and NPM on Ubuntu server.

\- Used PM2 for long-running server process.

\- Configured inbound EC2 security rules for port 5000.



Handling API Requests:

\- Enabled CORS in Express.

\- Ensured Fetch API pointed to correct public EC2 IP.

\- Fixed incorrect endpoint paths in HTML pages.



---



\## Future Enhancements



\- Full CRUD frontend (Add, Edit, Delete)

\- React frontend option

\- Authentication system with JWT

\- Dockerization for backend/database

\- CI/CD with GitHub Actions



---



\## Author



David Offutt

Computer Science Student

Lake Washington Institute of Technology

GitHub User Account: https://github.com/doff87

GitHub Portfolio: https://github.com/doff87/CS\_Portfolio

