const path = require('path');
const DePartment = require(path.join(__dirname, '../../db/schema/departmentSchema'));
const express = require("express");
const router = express.Router();
const Student = require("../../db/schema/studentSchema");

router.get("/", async (req,res)=>{
    const stu = await Student.find();
    res.json(stu);
});

router.post("/", async (req, res) => {
    try{
        console.log(req.body);
        const studentData =req.body;
        const newStudent = new Student(studentData);
        await newStudent.save();
        res.json({
        message: "student added sucessfully",       
    });
        }catch(error) {
                console.log(error)
                res.status(500).json({
                    message: "already exist",
                });
            }
});



router.post("/", async (req, res) => {
    try{
        console.log(req.body);
        const departmentData =req.body;
        const newDepartment = new DePartment(departmentData);
        await newDepartment.save();
        res.json({
        message: "department added sucessfully",       
    });
        }catch(error) {
                console.log(error)
                res.status(500).json({
                    message: "already exist",
                });
            }
});

async function findDepartmentById(deptId) {
    try {
      const department = await DePartment.find({ student_id: stuId }).exec();
      console.log(department);
    } catch (err) {
      console.error('Error finding department:', err);
    }
  }
  const stuId = '612921101001'
  findDepartmentById(stuId);

  router.get('/students', async (req, res) => {
    try {
        const studentId = req.query.studentId;
        const students = await Student.find({ student_id: studentId });
        if (!students.length) {
            return res.status(404).json({ message: 'No students found in this department' });
        }
        res.json(students);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.delete('/student/:id', async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await Student.findOneAndDelete({ student_id: studentId });

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json({ message: 'Student deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});
  
router.delete('/department/department_name', async (req, res) => {
    try {
        const departmentId = req.params.id;
        const department = await DePartment.findOneAndDelete({ department_id: departmentId });

        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }
        res.json({ message: 'Department deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;