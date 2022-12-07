const router = require('express').Router()

const usersRouter = require('./user.router.js')
const authRouter = require('./auth.router.js')
const catalogRouter = require('./catalog.router.js')

router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/catalog', catalogRouter)

module.exports = router