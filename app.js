const http = require('http');
const express = require('express');
const socket = require('socket.io');


const app = express();
const server = http.createServer(app);


server.listen('3000', () => {
    console.log('Server is running');
})