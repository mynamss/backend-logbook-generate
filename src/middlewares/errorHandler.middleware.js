const express = require("express")
const { apiResponse } = require("../utils/helper")
const { StatusCodes } = require("http-status-codes")
const { HttpException, HttpExceptionValidationError } = require("../exceptions/httpException")

module.exports = {
  errorHandler: async (error) => {
    try {
      console.log("error: ", error)
      console.log("error.parent: ", error.parent)

      const code = error.code || StatusCodes.INTERNAL_SERVER_ERROR
      const success = error.success || false
      const message = error.message
      const data = null
      const listError = error.errorsList || undefined

      if (error instanceof HttpException) {
        return apiResponse({ code, success, message, data, listError })
      }

      return apiResponse({ code, success, message, data, listError })
    } catch (error) {
      // next(error)
      console.log("ERROR HANDLER: ", error)
    }
  },
}
