const express = require("express");
const router = express.Router();

const authenticate = require("../middleware/authMiddleware");
 const authorize = require("../middleware/authorize");
 const validateStudent = require("../validators/studentValidator");
const { createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
 } = require("../controllers/studentController");


// Protected Route
router.post("/", authenticate, authorize("admin", "teacher"), validateStudent, createStudent);
router.get("/", authenticate, authorize("admin", "teacher"), validateStudent, getStudents);
router.put("/:id", authenticate, authorize("admin", "teacher"), validateStudent, updateStudent);
router.delete("/:id", authenticate, authorize("admin"), validateStudent, deleteStudent);

module.exports = router;