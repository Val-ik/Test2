// web framework
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')

// logica para procesar los recursos
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const todosRouter = require('./routes/todos')
const equipmentRouter = require('./routes/equipment')

let app = express()
// configuracion de servidor e interpretacion de mensajes del cliente
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

// rutas de los recursos, representa el Nivel 1 de un API REST
app.use('/', indexRouter) // pagina de hola mundo
app.use('/users', usersRouter) // operaciones hacia el recurso de 'usuarios'
app.use('/users/:userId/todos', (req, res, next) => { // operaciones hacia el recurso de 'tareas' del 'usuario'
    let userId = parseInt(req.params.userId)
    req.body.userId = userId
    next()
}, todosRouter)
app.use('/todos', todosRouter) // operaciones hacia el recurso de 'tareas'
/*app.use('/users/:userId/equipment', (req, res, next) => { // operaciones hacia el recurso de 'equipo' del 'usuario'
    let userId = parseInt(req.params.userId)
    req.body.userId = userId
    next()
}, equipmentRouter)*/
app.use('/equipment', equipmentRouter) // operaciones hacia el recurso de 'equipo'

module.exports = app
