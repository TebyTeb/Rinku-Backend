const router = require('express').Router()

const usersRouter = require('./user.router.js')

router.use('/users', usersRouter)
console.log('Siete Monos Mas Bonitos')
module.exports = router