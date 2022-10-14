const express = require('express')
const cors = require('cors')
const app = express()

const index = require('./routers/index')
const userRouter = require('./routers/user.router')
const timeRouter = require('./routers/time.router')
const torneioRouter = require('./routers/torneio.router')
const jogoRouter = require('./routers/jogo.router')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.json({type: 'application/vnd.api+json'}))
app.use(cors())

app.use(index)
app.use('/api/', userRouter)
app.use('/api/', timeRouter)
app.use('/api/', torneioRouter)
app.use('/api/', jogoRouter)

module.exports = app