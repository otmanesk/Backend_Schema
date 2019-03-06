let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  status: String,
  address: String,
  agency: String,
  startDate: Date,
  phoneNumber: String,
  gender: String,
  disponibility: false,
  birthday: Date,
  skills: String,
  projects: [
    {
      name: String,
      startDate: Date,
      description: String,
      technology: String
    }
  ],
  role: [
    {
      type: String,
      experience: String
    }
  ]
});
module.exports = mongoose.model("User", userSchema);
