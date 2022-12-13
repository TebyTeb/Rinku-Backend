const Notification = require("../models/notification.model");

function getNotification(req, res) {
  Notification
    .find({ userid: res.locals.user._id })
    .populate('subscriptionid')
    .then((notif) => res.json(notif))
    .catch((err) => res.json(err));
}

function createNotification(req, res) {
  Notification
    .create({userid: res.locals.user._id, ...req.body})
    .then((notif) => res.json(notif))
    .catch((err) => res.json(err));
}

function updateNotification(req, res) {
  Notification
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((notif) => res.json(notif))
    .catch((err) => res.json(err));
}

function deleteNotification(req, res) {
  Notification
    .findOneAndDelete({ _id: req.params.id })
    .then((notif) => res.json(notif))
    .catch((err) => res.json(err));
}

module.exports = {
  getNotification,
  createNotification,
  updateNotification,
  deleteNotification
}