const {Router} = require('express')
const router = Router()

const calculadoraController = require('../controllers/calculadora.controller')

router.post('/calcular-multiplicacion', calculadoraController.calcularMultiplicacion)

module.exports = router