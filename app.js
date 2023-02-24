const express = require ('express');
const logger = require ('morgan');
const cors = require ('cors')

const indexRouter = require("./routes/indexName")
const dividirRouter = require("./routes/dividir")
const imparRouter = require("./routes/impar")
const shoppingRouter = require("./routes/shopping")
const sumaRouter = require("./routes/suma")
const postRouter = require("./routes/post")


const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(cors())

app.use('/indexName',indexRouter)  // ej: http://localhost:3000/indexName/stefania/gentile
app.use('/dividir',dividirRouter) // ej: http://localhost:3000/dividir/85/45
app.use('/impar',imparRouter) //  ej: http://localhost:3000/impar?numero=13
app.use('/shopping',shoppingRouter) // ej: http://localhost:3000/shopping?semana=1
app.use('/suma',sumaRouter) // ej: http://localhost:3000/suma/8/56
app.use('/', postRouter) // ej: 


module.exports = app