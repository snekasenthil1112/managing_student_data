const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
    // department_id: { 
    //     type: Number, 
    //     required: 1, 
    //     unique: true },
    student_id:{
        type:Number,
        required:true,
        unique:true,
    },
    head_of_dept:{
        type:String,
        //ref:"Department",
        required:true,
    },
    
    no_of_students:{
        type:Number,
        required:false,
    },
});

const Department = mongoose.model("department", departmentSchema);


module.exports = Department;