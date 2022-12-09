const router = require('express').Router()

const {
  sendemail
} = require('../controllers/emailer.controller')

router.post('/send-email', sendemail)

module.exports = router
