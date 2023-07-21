
const express = require('express')
const morgan=require('morgan');
var cors = require('cors')
const app = express()
const {allStudentRoutes} =require('./indexRouter')
app.use(express.json())
app.use(cors())

if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'))

}

app.use('/api/v1',allStudentRoutes)


module.exports=app