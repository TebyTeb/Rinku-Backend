const router = require('express').Router()

const {
  authUser
} = require('../utils') 

const {
  createCatalog,
  getCatalogs,
  updateCatalog,
  deleteCatalog
} = require('../controllers/catalog.controller')

// CRUD basico
router.get('/', getCatalogs)
router.post('/', authUser, createCatalog)
router.put('/:id', authUser, updateCatalog)
router.delete('/:id', authUser, deleteCatalog)

module.exports = router