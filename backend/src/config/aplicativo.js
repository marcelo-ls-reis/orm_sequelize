const express = require('express')
const consign = require('consign')
const body = require('body-parser')

server = express()
server.use(body.json())

server.set('porta', 3000)
server.set('url', 'http://localhost:')

consign({ cwd: './src/api'})
    .include('models')
    .then('controllers')
    .then('routes')
    .into(server)
;

module.exports = server;


