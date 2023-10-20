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

module.exports = { apiResponse }
