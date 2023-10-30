const { getDocuments, getDocumentById, createDocument } = require("../../services/output.services")

module.exports = {
  getDocuments: async (req, res) => {
    // service process
    const resultData = await getDocuments()

    // response
    res.status(resultData.code).json(resultData)
  },
  getDocumentById: async (req, res) => {
    // service process
    const resultData = await getDocumentById(req.params.id)

    // response
    res.status(resultData.code).json(resultData)
  },

  createDocument: async (req, res) => {
    // service process
    const resultData = await createDocument(req.body)

    // response
    res.status(resultData.code).json(resultData)
  },
}
