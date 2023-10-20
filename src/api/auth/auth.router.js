const express = require("express")
const router = express.Router()

const { loginValidation, registerValidation, runValidation } = require("../../middlewares/validation.middleware")

const { authLogin, authRegister } = require("./auth.controller")

// login
router.post("/login", [loginValidation, runValidation], authLogin)

// register
router.post("/register", [registerValidation, runValidation], authRegister)

module.exports = router
