## Overview
HTTP JSON helper function.

[![Build Status](https://travis-ci.org/jupe/http-json-request.png?branch=master)](https://travis-ci.org/jupe/http-json-request)

## Usage

Arguments order are detected automatically.
- getJSON()
- postJSON()
- deleteJSON()
- putJSON()
- updateJSON()
- copyJSON()
- moveJSON()
- searchJSON()



## Usage:
```
var httpJson = require('http-json-request');
httpJson.postJSON('server', {my: jsonObject}, function(error, responseObject){
  console.log(responseObject);
});

var httpJson = require('http-json');
httpJson.defaultHost('server');
httpJson.defaultPort(3010);
httpJson.postJSON({my: jsonObject}, function(error, responseObject){
  console.log(responseObject);
});
httpJson.putJSON({my: jsonObject}, function(error, responseObject){
  console.log(responseObject);
});
httpJson.getJSON({my: jsonObject}, 'server2', function(error, responseObject){
  console.log(responseObject);
});

```

## Installation
```
npm install http-json-request
```
