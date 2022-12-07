const Catalogs = require("../models/catalog.model");

function getCatalogs(req, res) {
  console.log('LLEGUÉ AQUÍ')
  Catalogs.find()
    .then(catalogs => res.json(catalogs))
    .catch((err) => res.json(err));
}

module.exports = {
  getCatalogs
};
