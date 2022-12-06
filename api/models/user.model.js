const mongoose = require('mongoose');
require('mongoose-type-email');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minLength: [3, 'Name too short'],
    maxLength: [20, 'Name too long']
  },
  surname: {
    type: String,
    required: [true, 'Surname required'],
    minLength: [3, 'Surname too short'],
    maxLength: [20, 'Surname too long']
  },
  age: {
    type: Number,
    required: [true, 'Age is required']
  },
  email: {
    type: mongoose.SchemaTypes.Email,
    required: [true, 'Email is required'],
    unique: [true, 'This email is already registered']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  subscriptions: {
    type: Array
  },
  notifications: {
    type: Array
  }

});

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;