const router = require('express').Router()

/* const {
  authUser
} = require('../utils')  */

const {
  getCatalogs
} = require('../controllers/catalog.controller')

router.get('/', getCatalogs)

module.exports = router