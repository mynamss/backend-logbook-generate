const models = require("../db/models")
const { HttpExceptionNotFound } = require("../exceptions/httpException")
const { StatusCodes } = require("http-status-codes")
const { errorHandler } = require("../middlewares/errorHandler.middleware")

const { outputs, activities, interactions, logs, mentors } = models

module.exports = {
  getDocuments: async (req, res) => {
    try {
      // get all outputs
      const allOutputs = outputs.findAll()
      const allActivities = activities.findAll()
      const allInteractions = interactions.findAll()
      const allLogs = logs.findAll()
      const mentors = mentors.findOne()

      if (!result) throw new HttpExceptionNotFound("Documents not found.")

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

  getDocumentById: async (req, res) => {},

  createDocument: async (req, res) => {},
}
