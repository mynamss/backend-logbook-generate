const { getRoles, getRoleById, createRole } = require("../../services/role.services")

module.exports = {
  getRoles: async (req, res) => {
    // service process
    const resultData = await getRoles()

    // response
    res.status(resultData.code).json(resultData)
  },
  getRoleById: async (req, res) => {
    // service process
    const resultData = await getRoleById(req.params.id)

    // response
    res.status(resultData.code).json(resultData)
  },
  createRole: async (req, res) => {
    // service process
    const resultData = await createRole(req.body, userId = 1)

    // response
    res.status(resultData.code).json(resultData)
  },
}
