const Users = require("../models/user.model");
//const bcrypt = require('bcrypt') // importamos para encryptar el password

function getAllUsers(req, res) {
  Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}

function getProfile(req, res) {
  res.json(res.locals.user)
}
module.exports = {
  getAllUsers,
  getProfile
};
