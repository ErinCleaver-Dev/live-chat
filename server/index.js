require("dotenv").config({
});
const express = require('express');
const app = express();
var http = require('http');
const config = require('./config');
const ioserver = require('./config/ioserver');

require('./config/express')(app)
var server = http.createServer(app);

ioserver(server);

server.listen(config.development.port, () => console.log("Running server"));