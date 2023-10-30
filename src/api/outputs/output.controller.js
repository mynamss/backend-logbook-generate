const { getOutputs, getOutputById, createOutput } = require("../../services/output.services")

module.exports = {
  getOutputs: async (req, res) => {
    // service process
    const resultData = await getOutputs()

    // response
    res.status(resultData.code).json(resultData)
  },
  getOutputById: async (req, res) => {
    // service process
    const resultData = await getOutputById(req.params.id)

    // response
    res.status(resultData.code).json(resultData)
  },

  createOutput: async (req, res) => {
    // service process
    const resultData = await createOutput(req.body)

    // response
    res.status(resultData.code).json(resultData)
  },
}
