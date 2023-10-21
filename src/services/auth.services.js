const models = require("../db/models")
const { users, positions, roles, user_sessions } = models
// Response
const { v4: uuidv4 } = require("uuid")
const { StatusCodes } = require("http-status-codes")
const { apiResponse, createTimestamps, updateTimestamps } = require("../utils/helper")
// Exception
const { HttpExceptionValidationError, HttpException } = require("../exceptions/httpException")
const { errorHandler } = require("../middlewares/errorHandler.middleware")
// Token and Hashing
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const secretKey = process.env.SECRET_KEY
const saltRounds = 10

module.exports = {
  loginUser: async ({ email, password }, userAgent) => {
    try {
      // get datas
      const result = await users.findOne({
        where: {
          email,
        },
      })

      // check email
      if (!result) throw new HttpExceptionValidationError("Email is not registered. Register first")

      // check password
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

      // check if failed create token
      if (!newToken) throw new HttpException(422, false, "Token not created!")

      const updateToken = await users.update(
        {
          token: newToken,
          ...updateTimestamps(result.uuid),
        },
        {
          where: {
            email,
          },
        }
      )

      // check if failed update
      if (!updateToken.includes(1)) throw new HttpException(422, false, "Token not created!")

      // De-activate existing session and create new session
      const killSession = await user_sessions.update(
        {
          status: "EXPIRED",
          ...updateTimestamps(result.uuid),
        },
        {
          where: {
            user_id: result.uuid,
            status: "ACTIVE",
          },
        }
      )

      // check if failed update
      if (!killSession.includes(1)) throw new HttpException(422, false, "Session not created!")

      // create session
      const newSession = await user_sessions.create(
        {
          user_id: result.uuid,
          status: "ACTIVE",
          user_agent: userAgent,
          token: newToken,
          ...createTimestamps(result.uuid),
        },
        {
          raw: true,
        }
      )

      // check if session not created
      if (!newSession) throw new HttpException(422, false, "Session not created!")

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
      if (isExistUser) throw new HttpExceptionValidationError(`Email has been registered. Login is the best choices`)

      // check position by position_id
      const isExistPosition = await positions.findOne({
        where: {
          uuid: positionId,
        },
      })
      // if empty (position not found)
      if (!isExistPosition) throw new HttpExceptionValidationError(`Position not found. Please contact your admin`)

      // get role by position_id
      let roleId = ""
      const allPosition = await positions.findAll({
        raw: true,
        attributes: ["uuid"],
      })
      // Mapping all position
      const uuidPosition = allPosition.map((element) => {
        return element.uuid
      })

      if (uuidPosition.includes(positionId)) {
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
      const newUser = await users.create(
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
          fields: ["uuid", "fullname", "email"],
        }
      )

      console.log("NEW : ", newUser.email)

      // fill created_by and updated_by
      await users.update(
        {
          created_by: newUser.uuid,
          updated_by: newUser.uuid,
        },
        {
          where: {
            uuid: newUser.uuid,
          },
          // returning: ["uuid", "fullname", "email"],
          // raw: true,
        }
      )

      // success
      return apiResponse({
        code: StatusCodes.CREATED,
        success: true,
        message: "Success create new user",
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
}
