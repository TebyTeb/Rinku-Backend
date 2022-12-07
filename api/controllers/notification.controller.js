const Notification = require("../models/notification.model");

function getNotification(req, res) {
  Notification.find({ userid: req.params.userid })
    .then((notif) => res.json(notif))
    .catch((err) => res.json(err));
}

function createNotification(req, res) {
  Notification.create(req.body)
    .then((notif) => res.json(notif))
    .catch((err) => res.json(err));
}

function updateNotification(req, res) {
  Notification.updateOne({ _id: req.params.id }, req.body)
    .then((notif) => res.json(notif))
    .catch((err) => res.json(err));
}

function deleteNotification(req, res) {
  Notification.deleteOne({ _id: req.params.id })
    .then((notif) => res.json(notif))
    .catch((err) => res.json(err));
}

module.exports = {
  getNotification,
  createNotification,
  updateNotification,
  deleteNotification
}