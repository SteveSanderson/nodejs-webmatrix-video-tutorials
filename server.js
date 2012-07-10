var express = require('express'),
    app = express.createServer().listen(process.env.port || 3000),
    apiServer = require('./api/server.js'),
    ejsMiddleware = require('ejs-middleware');

app.use('/api', apiServer); // Mount the HTTP API on the URL space /api

app.use(ejsMiddleware(__dirname + '/static', 'html', app)); // Serve .html files via EJS renderer

app.use(express.static(__dirname + '/static')); // For other requests, just serve /static