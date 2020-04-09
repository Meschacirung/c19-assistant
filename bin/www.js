#!/usr/bin/env node

const app = require ('../app');
const debug = require ('debug')('src');
const http = require('http')

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.creatServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val){
    var port = parseInt(val, 10);

    if (isNaN(port)){
        return val
    }

    if (port >= 0){
        return port;
    }
    return false
}

function onError(error){
    if (error.syscall !== 'listen'){
        throw error;
    }
    var bind = typeof port == 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    switch (error.code){
        case 'EACCES':
            console.error(bind + 'requires elevated  privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':

    }
}