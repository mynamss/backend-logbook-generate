const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.json({ message: "Welcome to Logbook Generator by @mynamss and TEAM" })
})

module.exports = router
