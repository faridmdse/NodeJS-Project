const mongoose = require("mongoose");
const dbUrl =
  "mongodb+srv://mfarid:mfarid@cluster0.22dfrg9.mongodb.net/employee_db?retryWrites=true&w=majority";

module.exports = () => {
  return mongoose.connect(dbUrl);
};
