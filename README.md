## Overview
HTTP JSON helper function.

## Usage
Arguments order are detected automatically.

Usage:

```
var httpJson = require('http-json');
httpJson.postJSON('server', {my: jsonObject}, function(error, responseObject){
  console.log(error|responseObject);
});

var httpJson = require('http-json');
httpJson.defaultHost('server');
httpJson.defaultPort(3010);
httpJson.postJSON({my: jsonObject}, function(error, responseObject){
  console.log(error|responseObject);
});
httpJson.putJSON({my: jsonObject}, function(error, responseObject){
  console.log(error|responseObject);
});
httpJson.getJSON({my: jsonObject}, 'server2', function(error, responseObject){
  console.log(error|responseObject);
});

```