const router = require('express').Router()

/* const {
  authUser
} = require('../utils')  */

const {
  getUsers
} = require('../controllers/user.controller')

router.get('/', getUsers)

module.exports = router