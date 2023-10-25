class HttpException extends Error {
  constructor(code, success, message) {
    super(message)
    this.code = code
    this.message = message
    this.success = success
  }
}

class HttpExceptionValidationError extends HttpException {
  constructor(message) {
    super(422, false, message)
  }
}

class HttpExceptionUnauthorized extends HttpException {
  constructor(message) {
    super(401, false, message)
  }
}

module.exports = { HttpException, HttpExceptionValidationError, HttpExceptionUnauthorized }
