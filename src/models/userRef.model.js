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
  projects: [{ type: Schema.Types.ObjectId, ref: "Project" }],
  roles: [{ type: Schema.Types.ObjectId, ref: "Role" }]
});

let projectSchema = new mongoose.Schema({
  name: String,
  startDate: Date,
  description: String,
  technology: String
});
let roleSchema = new mongoose.Schema({
  type: String,
  experience: String
});
const Project = mongoose.model("Project", projectSchema);
const Role = mongoose.model("Role", roleSchema);
module.exports = mongoose.model("User", userSchema);
