const dotenv = require('dotenv')
dotenv.config()
const {DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME}=process.env

module.exports = {
  "development": {
    "username": DB_USER,
    "password": DB_PASS,
    "database": `${DB_NAME}_development`,
    "host": DB_HOST,
    "port":DB_PORT,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
