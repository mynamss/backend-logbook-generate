const { HttpExceptionUnauthorized, HttpException } = require("../exceptions/httpException")

module.exports = {
  authenticate: (req, res, next) => {
    const bearer = req.header("Authorization")
    if (!bearer) throw new HttpExceptionUnauthorized("Missing header authorization")

    if (!bearer.split(" ")[1]) throw new HttpException(404, false, "Unauthorized. Please login first !!!")

    next()
  },

  authorize: (req, res, next) => {},
}
