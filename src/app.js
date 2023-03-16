const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const connection = require('./connection/database.js')
const preventParseError = require("./middleware/preventParseErrorsMiddleware");

let routes = require('./routes.js');

server.use(bodyParser.json());

server.use(preventParseError);

routes.init(server);

server.listen(3000, async ()=>{
    console.log("Server iniciado")
    try {
        await connection.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }    
})
