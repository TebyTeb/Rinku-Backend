const Subscription = require("../models/subscriptions.model");

function getSubscriptions(req, res) {
  Subscription.find({ userid: req.params.userid })
    .then((sus) => res.json(sus))
    .catch((err) => res.json(err));
}

function createSubscriptions(req, res) {
  Subscription.create(req.body)
    .then((sus) => res.json(sus))
    .catch((err) => res.json(err));
}

function updateSubscriptions(req, res) {
  Subscription.updateOne({ _id: req.params.id }, req.body)
    .then((sus) => res.json(sus))
    .catch((err) => res.json(err));
}

function deleteSubscriptions(req, res) {
  Subscription.deleteOne({ _id: req.params.id })
    .then((sus) => res.json(sus))
    .catch((err) => res.json(err));
}

module.exports = {
  getSubscriptions,
  createSubscriptions,
  updateSubscriptions,
  deleteSubscriptions,
};
