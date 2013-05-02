## Overview
HTTP JSON helper function.

## Usage

Usage:

```
var httpJson = require('http-json');
httpJson.postJSON('server', {my: jsonObject}, function(error, responseObject){
  console.log(error|responseObject);
});

```