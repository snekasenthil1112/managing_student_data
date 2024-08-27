require("dotenv").config();
const connectDB = require("./db/Indexcon");
const departmentDetails = require("./details/department/departmentDetails");
const express = require("express");             
const app = new express();                          
const port =  process.env.PORT;   
  
app.use(express.json());
app.use("/department",departmentDetails);  
app.use('/managing_student_data', departmentDetails);          
connectDB();
 app.listen(port, () => {                            
    console.log(`Express app listening at http://localhost:${port}`)
 });


