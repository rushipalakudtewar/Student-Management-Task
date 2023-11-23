const express = require('express');
const app = express()
const cors = require('cors')
const dotenv= require('dotenv')
dotenv.config()
const connectDatabase = require('./database/db')
const studentRoute = require('./routes/studentRoute')
const port = process.env.PORT || 6000 
connectDatabase()
app.use(express.json())
app.use(cors())
app.use('/api/v1',studentRoute)
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})