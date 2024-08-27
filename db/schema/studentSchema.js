const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    student_id:{
        type:String,
        required:true,
        //unique:true,
    },
    student_name:{
        type:String,
        required:true,
    },
   
    student_dob:{
        type:Number,
        requried:false,
    },
    year_of_passing:{
        type:Number,
        required:true,
    },
    department_name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"DePartment",
        required:true,
        //unique:true,
    },
});

const Student = mongoose.model("student", studentSchema);

module.exports = Student;