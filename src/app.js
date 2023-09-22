const express = require("express")
const app = express()
const PORT = process.env.PORT | 7000

const allRoutes = require("./routes/index")

app.use(express.json())
app.use(allRoutes)

// app.get("/", (req, res) => {
//   res.send("Hello World!")
// })

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`)
})
