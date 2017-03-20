var fs = require("fs");
var express = require('express');
var app = express();
var winston = require('winston');
var _ = require('lodash');

var logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({'timestamp':true}),
        new (winston.transports.File)({ filename: 'server.log' })
    ]
});

app.get('/data/:message', function (req, res) {
  res.end(JSON.stringify({ message: req.params.message }));
})

var server = app.listen(3000, function () {
  logger.info("Server started on port " + server.address().port);
});
