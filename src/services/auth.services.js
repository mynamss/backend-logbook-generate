const { v4: uuidv4 } = require("uuid")
const models = require("../db/models")
const { HttpExceptionValidationError, HttpException } = require("../exceptions/httpException")
const { apiResponse } = require("../utils/helper")
const { users, positions, roles } = models
const { StatusCodes } = require("http-status-codes")
const { errorHandler } = require("../middlewares/errorHandler.middleware")
const jwt = require("jsonwebtoken")
const secretKey = process.env.SECRET_KEY
const bcrypt = require("bcrypt")
const saltRounds = 10

module.exports = {
  loginUser: async ({ email, password }) => {
    try {
      // get datas
      const result = await users.findOne({
        where: {
          email,
        },
      })

      // check email and password
      if (!result) throw new HttpExceptionValidationError("Email is not registered. Register first")

      const isMatchPassword = bcrypt.compareSync(password, result.password)
      if (!isMatchPassword) throw new HttpExceptionValidationError("Wrong Password. Please check again!")

      // create token
      const newToken = jwt.sign(
        {
          uuid: result.uuid,
          email: result.email,
          role_id: result.role_id,
        },
        secretKey,
        { expiresIn: "1d" }
      )

      await users.update(
        {
          token: newToken,
          updated_at: new Date(),
          updated_by: result.uuid,
        },
        {
          where: {
            email,
          },
        }
      )

      // success
      return {
        code: 200,
        success: true,
        message: "Login successfully",
        data: {
          token: newToken,
        },
      }
    } catch (error) {
      return errorHandler(error)
    }
  },

  createUser: async ({ fullname, email, password, position_id: positionId }) => {
    try {
      // check if exist user
      const isExistUser = await users.findOne({
        where: {
          email,
        },
      })
      // if exist (user registered)
      if (isExistUser) throw new HttpExceptionValidationError(`Email has been registered. Login is best choices`)

      // check position by position_id
      const isExistPosition = await positions.findOne({
        where: {
          uuid: positionId,
        },
      })
      // if empty (position not found)
      if (!isExistPosition) throw new HttpExceptionValidationError(`Position not found. Please contact your admin`)

      // get role by position_id
      const arrPosition = []
      let roleId = ""
      const allPosition = await positions.findAll()
      allPosition.forEach((element) => {
        arrPosition.push(element.uuid)
      })

      if (arrPosition.includes(positionId)) {
        const role = await roles.findOne({
          where: {
            role_name: "Mahasiswa",
          },
        })
        roleId = role.uuid
      }

      // Bcrypt password
      const hashedPassword = bcrypt.hashSync(password, saltRounds)

      // create user
      const result = await users.create(
        {
          uuid: uuidv4(),
          fullname,
          email,
          password: hashedPassword,
          role_id: roleId,
          position_id: positionId,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          raw: true,
        }
      )
      // fill created_by and updated_by
      await users.update(
        { created_by: result.uuid, updated_by: result.uuid },
        {
          where: {
            uuid: result.uuid,
          },
        }
      )

      // success
      return apiResponse({
        code: StatusCodes.CREATED,
        success: true,
        message: "Success create new user",
        data: {
          uuid: result.uuid,
          fullname: result.fullname,
          email: result.email,
        },
      })
    } catch (error) {
      return errorHandler(error)
    }
  },
}
