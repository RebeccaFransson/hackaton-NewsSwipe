"use strict";
  var express = require('express'),
  app = express(),
  request = require('request');

  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');

    var url = 'http://opencontent.infomaker.io:8080/opencontent/health';

    request(url, function (error, response, body) {
    	if (!error) {
    		console.log(body);
    	} else {
    		console.log("We’ve encountered an error: " + error);
    	}
    });

  });

  var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
  });
