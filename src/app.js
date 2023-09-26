const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()

const PORT = process.env.PORT | 7000
const path = process.env.PATH_VERSION

const allRoutes = require("./api/index")

// const { connectToDB } = require("./config/connection")
// console.log(connectToDB())

app.use(express.json())
app.use(path, allRoutes)

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}${path}`)
})
