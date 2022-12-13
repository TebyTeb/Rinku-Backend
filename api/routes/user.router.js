const router = require('express').Router()

const {
  authUser
} = require('../utils') 

const {
  getAllUsers,
  getProfile,
  updateProfile,
  deleteProfile
} = require('../controllers/user.controller')

router.get('/', getAllUsers)
router.get('/profile', authUser, getProfile)
router.put('/profile', authUser, updateProfile)
router.delete('/profile', authUser, deleteProfile)

module.exports = router