const { apiResponse } = require("../../utils/helper")
const { loginUser, createUser } = require("../../services/auth.services")

module.exports = {
  authLogin: async (req, res) => {
    const resultData = await loginUser(req.body)
    console.log("AUTH CONTROLLER");
    // response
    res.status(resultData.code).json(resultData)
  },

  authRegister: async (req, res) => {
    // service process
    const resultData = await createUser(req.body)

    // response
    res.status(resultData.code).json(resultData)
  },
}
