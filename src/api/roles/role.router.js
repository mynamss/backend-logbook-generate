const express = require("express")
const router = express.Router()

const { authenticate, authorize } = require("../../middlewares/auth.middleware")
const { getRoles, getRoleById, createRole } = require("./role.controller")

// get all user
router.get("/", getRoles)
router.get("/:id", getRoleById)
router.post("/create", createRole)

module.exports = router
