const { body, validationResult } = require("express-validator");

const validateStudent = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required"),

    body("age")
        .isInt({ min: 1 })
        .withMessage("Age must be a positive integer"),

    body("course")
        .trim()
        .notEmpty()
        .withMessage("Course is required"),

    (req, res, next) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        next();
    }
];

module.exports = validateStudent;