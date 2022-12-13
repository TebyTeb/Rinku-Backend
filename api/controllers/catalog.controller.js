const Catalogs = require("../models/catalog.model");

// CRUD basico
function createCatalog(req, res) {
  Catalogs
    .create(req.body)
    .then(catalogs => res.json(catalogs))
    .catch(err => handleError(err, res))
}
function getCatalogs(req, res) {
  Catalogs
    .find(req.query)
    .then(catalogs => res.json(catalogs))
    .catch(err => handleError(err, res))
}
function updateCatalog(req, res) {
  Catalogs
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}
function deleteCatalog(req, res) {
  Catalogs
    .remove({_id: req.params.id})
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

module.exports = {
  createCatalog,
  getCatalogs,
  updateCatalog,
  deleteCatalog
};
