const { getUsers, getOneUser } = require("../../services/user.services")
const { apiResponse } = require("../../utils/helper")

module.exports = {
  getAllUser: async (req, res) => {
    const resultData = await getUsers()

    return apiResponse(res, resultData)
  },
  getUserById: async (req, res) => {
    const { id } = req.params

    const resultData = await getOneUser(id)
    console.log("ISI: ", resultData)
    return apiResponse(res, resultData)
  },
}
