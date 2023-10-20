const express = require("express")
const router = express.Router()

const authRouter = require("./auth/auth.router")
const userRouter = require("./users/user.router")

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Logbook Generator by @mynamss and TEAM" })
})

// Define all router
router.use("/auth", authRouter)
router.use("/users", userRouter)

module.exports = router
