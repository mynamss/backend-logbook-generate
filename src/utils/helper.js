// res, code, success = true || false, message, data = undefined
const apiResponse = (responseData) => {
  const { code, success = true || false, message, data, listError } = responseData

  return {
    code: code,
    success: success,
    message: message,
    data: data ? data : undefined,
    listError: listError ? listError : undefined,
  }
}

const createTimestamps = (userId) => {
  return {
    created_at: new Date(),
    created_by: userId,
    updated_at: new Date(),
    updated_by: userId,
  }
}
const updateTimestamps = (userId) => {
  return {
    updated_at: new Date(),
    updated_by: userId,
  }
}

module.exports = { apiResponse, createTimestamps, updateTimestamps }
