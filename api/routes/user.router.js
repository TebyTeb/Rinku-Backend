const router = require('express').Router()

const {
  authUser
} = require('../utils') 

const {
  getAllUsers,
  getProfile
} = require('../controllers/user.controller')

router.get('/', getAllUsers)
router.get('/profile', authUser, getProfile)

module.exports = router