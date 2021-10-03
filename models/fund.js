const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const Project = new Schema({
  projectName: {
    type: String,
    required: true
  },
  projectdesc: {
    type: String,
    required: true
  },
  projectSector: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: pending
  }
});
module.exports = mongoose.model("project", Project);