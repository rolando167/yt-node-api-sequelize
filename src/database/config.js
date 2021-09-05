const { Sequelize } = require('sequelize');
require('dotenv').config();

const { DB_HOST, DB_NAME,  DB_USERNAME, DB_PASSWORD } = process.env;

	// Option 2: Passing parameters separately (other dialects)
	const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
		host: DB_HOST, // 'localhost'
		dialect: 'postgres'
	});

	async function connectDB() {
		try {
			await sequelize.authenticate();
			console.log('Connection has been established successfully 🛢️.');
		} catch (error) {
			console.error('Unable to connect to the database:', error);
		}
	}

  module.exports = {
	  connectDB,
	   sequelize
	};