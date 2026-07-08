const Student = require("../models/student");
const asyncHandler = require("../middleware/asyncHandler");

// Create Student
const createStudent = asyncHandler(async (req, res) => {
    const { name, admissionNumber, course, year } = req.body;

    const student = await Student.create({
        name,
        admissionNumber,
        course,
        year,
        createdBy: req.user._id,
    });

    res.status(201).json({
        success: true,
        message: "Student created successfully",
        student,
    });
});

const getStudents = asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search || "";

    const skip = (page - 1) * limit;

    const query = {
        createdBy: req.user._id,
    };

    if (search) {
        query.$or = [
            {
                name: {
                    $regex: search,
                    $options: "i",
                },
            },
            {
                admissionNumber: {
                    $regex: search,
                    $options: "i",
                },
            },
        ];
    }

    const totalStudents = await Student.countDocuments(query);
    const sort = req.query.sort || "name";
    const students = await Student.find(query)
        .sort(sort)
        .skip(skip)
        .limit(limit);

    res.status(200).json({
        success: true,
        page,
        limit,
        totalStudents,
        totalPages: Math.ceil(totalStudents / limit),
        count: students.length,
        students,
    });
});
// Update Student
const updateStudent = asyncHandler(async (req, res) => {
    const student = await Student.findOneAndUpdate(
        {
            _id: req.params.id,
            createdBy: req.user._id,
        },
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );

    if (!student) {
        const error = new Error("Student not found");
        error.statusCode = 404;
        throw error;
    }

    res.status(200).json({
        success: true,
        message: "Student updated successfully",
        student,
    });
});

// Delete Student
const deleteStudent = asyncHandler(async (req, res) => {
    const student = await Student.findOneAndDelete({
        _id: req.params.id,
        createdBy: req.user._id,
    });

    if (!student) {
        const error = new Error("Student not found");
        error.statusCode = 404;
        throw error;
    }

    res.status(200).json({
        success: true,
        message: "Student deleted successfully",
    });
});

module.exports = {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent,
};