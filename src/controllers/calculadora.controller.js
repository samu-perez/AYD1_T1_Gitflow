const calcularSuma = (req, res) => {
    const {num1, num2} = req.body

    try {
        const resultado = parseInt(num1) + parseInt(num2)        
        res.status(200).json({resultado: resultado})
    } catch (error) {
        console.error('Error calculadora - calculadora.controller', error)
        res.status(500).json({message: "Error al sumar"})
    }
}

module.exports = {
    calcularSuma
}