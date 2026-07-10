const { body, validationResult } = require("express-validator");

const validateStudent = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required"),

  body("admissionNumber")
    .trim()
    .notEmpty()
    .withMessage("Admission Number is required"),

  body("course")
    .trim()
    .notEmpty()
    .withMessage("Course is required"),

  body("year")
    .isInt({ min: 1, max: 6 })
    .withMessage("Year must be between 1 and 6"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];

module.exports = validateStudent;