// Test connection
const { Sequelize } = require("sequelize")
const sequelize = new Sequelize("logbook_db", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
})

const connectToDB = () => {
  sequelize
    .authenticate()
    .then(() => {
      return "Connection has been established successfully."
    })
    .catch((error) => {
      return `Unable to connect to the database: , ${error}`
    })
}

module.exports = { connectToDB }
