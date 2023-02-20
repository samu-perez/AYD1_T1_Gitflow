const {Router} = require('express')
const router = Router()

const calculadoraController = require('../controllers/calculadora.controller')

router.post('/calcular-suma', calculadoraController.calcularSuma)

module.exports = router