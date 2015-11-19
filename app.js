"use strict";
  var express = require('express'),
  app = express(),
  request = require('request');

  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');

    var url = 'http://hackaton:hyK6aJ7wU4wo@opencontent.infomaker.io:8080/opencontent/search?start=0&limit=15&latest=true&deleted=false&q=kalmar';
    var result = null;
    request(url, function (error, response, body) {
    	if (!error) {
    		console.log(JSON.parse(body).hits);
        result = JSON.parse(body);
    	} else {
    		console.log("We’ve encountered an error: " + error);
    	}

    });

    if(result != null){
      for(i = 0; i < cars.length; i++){

      }
    }

  });
//
  var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
  });
