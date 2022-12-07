const Users = require("../models/user.model");
//const bcrypt = require('bcrypt') // importamos para encryptar el password

function getUsers(req, res) {
  Users.find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}

module.exports = {
  getUsers,
};
