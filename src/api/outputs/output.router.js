const express = require("express")
const router = express.Router()

const { authenticate, authorize } = require("../../middlewares/auth.middleware")
const { getUsers, getUserById } = require("./user.controller")

// get all user
router.get("/", authenticate,getUsers)
router.get("/:id", getUserById)

module.exports = router
