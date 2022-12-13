const mongoose = require("mongoose");
require("mongoose-type-email");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  surname: {
    type: String,
    required: [true, "Surname required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: [true, "Email is required"],
    unique: [true, "This email is already registered"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  telephone: {
    type: Number,
    required: true,
    minLength: [9, "Telephone is too short"],
    maxLength: [9, "Telephone is too long"],
  },
  budget: {
    type: Number,
  },
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
