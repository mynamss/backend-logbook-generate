const express = require("express")
const router = express.Router()

const { authenticate, authorize } = require("../../middlewares/auth.middleware")
const { getDocuments, getDocumentById, createDocument } = require("./document.controller")

// get all user
router.get("/", getDocuments)
router.get("/:id", getDocumentById)
router.post("/", createDocument)

module.exports = router
