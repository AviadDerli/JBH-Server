const express = require('express')
const app = express()
require("dotenv").config();

const db = require('./DL/db')
db.connect()

app.use(express.json())
const cors = require('cors')
app.use(cors())


const userRouter = require('./Routes/user.router')
app.use('/user',userRouter)

app.listen(2500, () => { console.log("*** Server is UP ***\nPort:2500"); })