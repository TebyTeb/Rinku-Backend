const Users = require("../models/user.model");
const Subscription = require("../models/subscriptions.model");
const Notification = require("../models/notification.model");
const bcrypt = require('bcrypt') // importamos para encryptar el password

function getAllUsers(req, res) {
  Users
    .find()
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
}

function getProfile(req, res) {
  res.json(res.locals.user)
}

function updateProfile(req, res) {
  if (req.body.password !== undefined) req.body.password = bcrypt.hashSync(req.body.password, 10)
  Users
    .findOneAndUpdate({ _id: res.locals.user._id }, req.body)
    .then((sus) => res.json(sus))
    .catch((err) => res.json(err));
}

function deleteProfile(req, res) {
  Subscription
    .deleteMany({ userid: res.locals.user._id })
    .then(sub => {
      Notification
        .deleteMany({ userid: res.locals.user._id })
        .then(notif => {
          Users
            .findOneAndDelete({ _id: res.locals.user._id })
            .then(user => res.json(user))
        })
    })
}
module.exports = {
  getAllUsers,
  getProfile,
  updateProfile,
  deleteProfile
};
