// res, code, success = true || false, message, data = undefined
const apiResponse = (responseData) => {
  const { code, success = true || false, message, data } = responseData

  return {
    code: code,
    success: success,
    message: message,
    data: data ? data : undefined,
  }
}

module.exports = { apiResponse }
