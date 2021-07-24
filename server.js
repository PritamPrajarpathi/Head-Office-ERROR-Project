const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require("path")

const app = express()

dotenv.config({path:"config.env"})
const PORT = process.env.PORT || 5000

//log requests
app.use(morgan('tiny'))

// parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//set veiw engine
app.set("view engine","ejs")

//load routers
app.use('/',require('./server/routes/router'))


app.listen(3000,()=>{console.log(`Server is running on http://localhost:${PORT}`)})
