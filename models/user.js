const mongoose = require("mongoose");

// the Schema for our user
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobileNumber: Number,
});

const user = mongoose.model("users", userSchema);

module.exports = user;
