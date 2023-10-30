const models = require("../db/models")
const { HttpExceptionNotFound } = require("../exceptions/httpException")
const { StatusCodes } = require("http-status-codes")
const { errorHandler } = require("../middlewares/errorHandler.middleware")

const { outputs } = models

module.exports = {
  getOutputs: async (req, res) => {
    try {
      // get all outputs
      const result = outputs.findAll()

      if (!result) throw new HttpExceptionNotFound("Outputs not found.")

      // success
      return apiResponse({
        code: StatusCodes.CREATED,
        success: true,
        message: "Success get all output",
        data: {
          uuid: newUser.uuid,
          fullname: newUser.fullname,
          email: newUser.email,
        },
      })
    } catch (error) {
      return errorHandler(error)
    }
  },

  getOutputById: async (req, res) => {},

  createOutput: async (req, res) => {},
}
