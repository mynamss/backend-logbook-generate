const { getUsers, getUserById } = require("../../services/user.services")
const { apiResponse } = require("../../utils/helper")

module.exports = {
  getUsers: async (req, res) => {
    // service process
    const resultData = await getUsers()

    // response
    res.status(resultData.code).json(resultData)
  },
  getUserById: async (req, res) => {
    // service process
    const resultData = await getUserById(req.params.id)

    // response
    res.status(resultData.code).json(resultData)
  },
}
