const models = require("../db/models")
const { roles } = models
const { HttpExceptionNotFound, HttpExceptionValidationError, HttpException } = require("../exceptions/httpException")
const { errorHandler } = require("../middlewares/errorHandler.middleware")
const { v4: uuidv4 } = require("uuid")
const { StatusCodes } = require("http-status-codes")
const { apiResponse } = require("../utils/helper")

module.exports = {
  getRoles: async () => {
    try {
      // get datas
      const result = await roles.findAll()

      if (!result || result.length === 0) throw new HttpExceptionNotFound("Role Not Found.")

      // success
      return {
        code: 200,
        success: true,
        message: "Success get all role",
        data: result,
      }
    } catch (error) {
      return errorHandler(error)
    }
  },

  getRoleById: async (roleId) => {
    try {
      // check
      const result = await roles.findOne({
        where: {
          uuid: roleId,
        },
      })

      console.log("BY ID: ", result)
      // if null or undefined (no data)
      if (!result) throw new HttpExceptionNotFound(`Role not found.`)

      return apiResponse({
        code: 200,
        success: true,
        message: "Success get role",
        data: result,
      })
    } catch (error) {
      return errorHandler(error)
    }
  },

  createRole: async (data, userId) => {
    try {
      const { role_name } = data
      let roleName = role_name.toLowerCase()

      // check if exist
      const isExistRole = await roles.findOne({
        where: {
          role_name: roleName,
        },
      })

      // if exist (role)
      if (isExistRole) throw new HttpExceptionValidationError(`Roles already exist.`)

      const result = await roles.create(
        {
          uuid: uuidv4(),
          role_name: roleName,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          raw: true,
        }
      )

      if (Object.keys(result).length === 0) throw new HttpException(422, false, "Failed create new role")

      // success
      return {
        code: StatusCodes.CREATED,
        success: true,
        message: "Success create new role",
        data: result,
      }
    } catch (error) {
      return errorHandler(error)
    }
  },
}
