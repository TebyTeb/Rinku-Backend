const Subscription = require("../models/subscriptions.model");

function getSubscriptions(req, res) {
  Subscription
    .find({ userid: res.locals.user._id })
    .then((subs) => res.json(subs))
    .catch((err) => res.json(err));
}

function createSubscriptions(req, res) {
  Subscription
    .create({userid: res.locals.user._id, ...req.body})
    .then((subs) => res.json(subs))
    .catch((err) => res.json(err));
}

function updateSubscriptions(req, res) {
  Subscription
    .findOneAndUpdate({ _id: req.params.id }, req.body)
    .then((subs) => res.json(subs))
    .catch((err) => res.json(err));
}

function deleteSubscriptions(req, res) {
  Subscription
    .findOneAndDelete({ _id: req.params.id })
    .then((subs) => res.json(subs))
    .catch((err) => res.json(err));
}

module.exports = {
  getSubscriptions,
  createSubscriptions,
  updateSubscriptions,
  deleteSubscriptions,
};
