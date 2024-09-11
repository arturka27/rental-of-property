const express = require('express');
const removeHeader = require('../middleware/removeHeader');
const cookieParser = require('cookie-parser');

const serviceConfig = (app) => {
    //middleware чаще всего работает с req
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(cookieParser())
    app.use(removeHeader);
};

module.exports = serviceConfig;