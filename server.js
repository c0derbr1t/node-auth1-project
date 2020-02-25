const express = require('express');
const cors = require('cors');
const session = require('express-session');
const KnexStore = require('connect-session-knex')(session);

const apiRouter = require('./api/api-router.js');
const knex = require('./data/dbConfig.js');

const server = express();

const sessionConfig = {
    name: 'deadpool',
    secret: 'Deadpool is my favorite movie!',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 15, // 15 minutes
        secure: false,
        httpOnly: true
    },
    store: new KnexStore({
        knex,
        tablename: 'sessions',
        createtable: true,
        sidfieldname: 'sess_id',
        clearInterval: 1000 * 60 * 15
    })
}

server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

server.use('/api', apiRouter);

server.get('/', (req, res) => {
    res.send('<h1>Welcome to the User Management System</h1>');
});

module.exports = server;