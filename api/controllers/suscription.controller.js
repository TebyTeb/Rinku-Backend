const Suscription = require("../models/suscriptions.model");

function getSuscriptions(req, res) {
  Suscription.find({ userid: req.params.userid })
    .then((sus) => res.json(sus))
    .catch((err) => res.json(err));
}

function createSuscriptions(req, res) {
  Suscription.create(req.body)
    .then((sus) => res.json(sus))
    .catch((err) => res.json(err));
}

function updateSuscriptions(req, res) {
  Suscription.updateOne({ _id: req.params.id }, req.body)
    .then((sus) => res.json(sus))
    .catch((err) => res.json(err));
}

function deleteSuscriptions(req, res) {
  Suscription.deleteOne({ _id: req.params.id })
    .then((sus) => res.json(sus))
    .catch((err) => res.json(err));
}

module.exports = {
  getSuscriptions,
  createSuscriptions,
  updateSuscriptions,
  deleteSuscriptions,
};
