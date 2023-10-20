const express = require("express")
const router = express.Router()

const {getAllUser, getUserById, createUser} = require("./user.controller")

// get all user
router.get('/', getAllUser)
router.get('/:id', getUserById)



module.exports = router
