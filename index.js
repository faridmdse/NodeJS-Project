const express = require("express");
const bodyParser = require("body-parser");

const connectDb = require("./db.js");
const employeeRoutes=require('./controller/employee.controller.js')

const app = express();

//middleware
app.use(bodyParser.json());
app.use('/api/employees',employeeRoutes)


app.listen(3000, () => console.log("Server started at 3000"));

connectDb()
  .then(() => {
    console.log('db connection succeeded.')
  })
  .catch((err) => console.log(err));
