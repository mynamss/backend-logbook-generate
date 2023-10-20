const express = require("express")
const router = express.Router()

const { loginValidate, registerValidate } = require("../../middlewares/validation.middleware")
const { authLogin, authRegister } = require("./auth.controller")

// login
router.post("/login", authLogin)

// register
router.post("/register", authRegister)

module.exports = router
