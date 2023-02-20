const {Router} = require('express')
const router = Router()

const infoController = require('../controllers/info.controller')

router.get('/info', infoController.getInfo)

module.exports = router