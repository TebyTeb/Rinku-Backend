const router = require('express').Router()

const usersRouter = require('./user.router.js')

router.use('/users', usersRouter)
console.log('4 monos')
module.exports = router