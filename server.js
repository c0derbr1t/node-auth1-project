const express = require('express');

const apiRouter = require('./api/api-router.js');

const server = express();

server.use(express.json());

server.use('/api', apiRouter);

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the User Management System</h1>');
});

module.exports = server;