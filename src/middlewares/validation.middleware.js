const { body, validationResult } = require("express-validator")
const { errorHandler } = require("./errorHandler.middleware")
const { HttpException } = require("../exceptions/httpException")

module.exports = {
  // BASE VALIDATION FUNCTION HANDLER
  runValidation: (req, res, next) => {
    // Get error if exist
    const result = validationResult(req)

    // Get error if exist
    if (!result.isEmpty()) {
      return errorHandler({
        code: 422,
        success: false,
        message: "Validation Error",
        errorsList: result.array(),
      })
        .then((errors) => {
          return res.status(errors.code).json(errors)
        })
        .catch((errors) => {
          throw new HttpException(500, false, "INTERNAL SERVER ERROR")
        })
    }
    // Validation passed and continued to controller
    next()
  },

  loginValidation: [
    body("email", "Email is not valid")
      .isEmail()
      .isLength({
        min: 13,
        max: 30,
      })
      .withMessage("Minimum length is 13"),
    body("password", "Password must be at least 8 characters long and include at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character.").isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    }),
  ],

  registerValidation: [
    // fullname
    body("fullname", "Name is not valid")
      .isAlphanumeric("en-US", {
        ignore: " ",
      })
      .withMessage("Name can only contain letters and number"),
    // email
    body("email", "Email is not valid")
      .isEmail()
      .isLength({
        min: 13,
        max: 30,
      })
      .withMessage("Minimum length is 13"),
    // password
    body("password", "Password must be at least 8 characters long, 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character.").isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    }),

    body("position_id", "FALSE UUID").isUUID("4").withMessage("ID Position is not valid UUID"),
  ],
}
