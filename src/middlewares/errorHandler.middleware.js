const express = require("express")
const { apiResponse } = require("../utils/helper")
const { StatusCodes } = require("http-status-codes")
const { HttpException, HttpExceptionValidationError } = require("../exceptions/httpException")

module.exports = {
  errorHandler: async (error) => {
    try {
      console.log("error: ", error)
      console.log("error.parent: ", error.parent)

      const code = error.code || 500
      // const status = error.status || "INTERNAL_SERVER_ERROR"
      const success = error.success || false
      const message = error.message
      const data = null

      if (error instanceof HttpException) {
        return apiResponse({ code, success, message, data })
      }

      return apiResponse({ code, success, message, data })
    } catch (error) {
      // next(error)
      console.log("ERROR HANDLER: ", error)
    }
  },
}
