// Test connection
// const dotenv = require("dotenv")
// dotenv.config()

const database = process.env.DB_NAME
const username = process.env.DB_USER
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const dialect = process.env.DB_DIALECT

const { Sequelize } = require("sequelize")
const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect,
  logging: false,
})

const connectToDB = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connected to Postgre SQL")
    })
    .catch((error) => {
      console.log(`Unable to connect to the database: , ${error}`)
    })
}

module.exports = { connectToDB }
