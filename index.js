//import .env

require('dotenv').config()

//import express

const express = require('express')

//import cors

const cors = require('cors')

//import concetion file

require('./connection')

//import routes

const routes = require('./routes')


//create a server using express

const globoServer = express()

//server connecting frontend with cors

globoServer.use(cors())
//parse the data from frontend

globoServer.use(express.json())

//connect to routes file

globoServer.use(routes)

//set port for the server

const PORT = 4000||process.env.PORT

//listen to the request received ata particular port

globoServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})