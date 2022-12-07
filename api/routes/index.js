const router = require('express').Router()

const usersRouter = require('./user.router.js')
const authRouter = require('./auth.router.js')

router.use('/users', usersRouter)
router.use('/auth', authRouter)

module.exports = router