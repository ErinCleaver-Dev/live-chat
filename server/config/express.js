const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser')
const session = require('express-session')
const config = require('./index')


function setupExpress(app) {
    app.use(cors());
    app.use(express.urlencoded({extended: false}));
    app.use(express.static('public'))
    app.use(express.json());
    app.use(cookieParser())
}

module.exports = setupExpress