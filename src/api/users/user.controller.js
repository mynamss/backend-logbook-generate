const { getUsers, getUserById } = require("../../services/user.services")

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
