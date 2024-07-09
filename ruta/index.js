const express = require('express')
const router = express.Router()
const reservasRouter = require('./routes')


router.use('/prueba',reservasRouter)

module.exports = router 