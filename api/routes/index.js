const router = require('express').Router()

const usersRouter = require('./user.router.js')

router.use('/users', usersRouter)

module.exports = router