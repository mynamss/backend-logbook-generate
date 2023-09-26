const express = require("express")
const { check, validationResult } = require("express-validator")

const runValidation = (req, res, next) => {
  const error = validationResult(req)
  if (!error.isEmpty()) {
    const deepErrors = _.flattenDeep(error.array().map((errors) => errors.nestedErrors))
    const detailError = deepErrors.map((err) => err.msg)
    console.log("CUMA SAMPAI SINI PAK: ", detailError)
    return response(false, 422, error.array()[0].msg, null, detailError, res)
  }
  next()
}

module.exports = {
  loginValidate: (req, res, next) => {
    
    console.log("masuk sini", result)

    if (result.isEmpty()) {
      return res.send(`Hello, Gais!`)
    }

    body("email").isEmail().withMessage("Email not valid")
    body("password").isEmpty().withMessage("Password cannot be empty").isString().isAlpha().withMessage("Letters only")

    next()
  },
  registerValidate: (next) => {},
}
