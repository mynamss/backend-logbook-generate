const models = require("../db/models")
const { users } = models

module.exports = {
  getUsers: async () => {
    try {
      // get datas
      const result = await users.findAll()

      // success
      return {
        code: 200,
        success: true,
        message: "Success get all user",
        data: result,
      }
    } catch (error) {
      return error
    }
  },

  getUserById: async (userId) => {
    try {
      // get data
      const result = await users.findOne({
        where: {
          uuid: userId,
        },
      })

      // if null or undefined (no data)
      if (!result)
        throw {
          code: 404,
          success: false,
          message: "User not found",
          data: result,
        }

      return {
        code: 200,
        success: true,
        message: "Success get user",
        data: result,
      }
    } catch (error) {
      return error
    }
  },
}
