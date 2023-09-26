const express = require("express")
const router = express.Router()

const authRouter = require("./auth/auth.router")

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Logbook Generator by @mynamss and TEAM" })
})

// Define all router
router.use("/auth", authRouter)

module.exports = router
