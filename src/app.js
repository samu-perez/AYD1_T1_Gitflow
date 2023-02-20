const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()


//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))
app.use(cors())


//Routes API
app.use(require('./routes/info.route'))
app.use(require('./routes/calculadora.route'))

app.get('/', (req, res) => {
    res.send('AYD1 Tarea 1 - Gitflow')
})


app.listen(3000, () => {
    console.log('Server on port 3000')
})