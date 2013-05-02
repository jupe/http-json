var http = require('http');


function Request(host, port, path, method, json, timeout, cb)
{
  var data = JSON.stringify(json);
  var headers = {
    'Content-Type': 'application/json',
    'accept': 'application/json',
    'Content-Length': data.length,
  };
  var options = {
    host: host,
    port: port,
    path: path,
    method: method,
    headers: headers,
  };
  
  //console.log(options);
  var body ='';
  // Setup the request.  The options parameter is
  // the object we defined above.
  var req = http.request(options, function(res) {
    res.setEncoding('utf-8');
    res.on('data', function(chunk) {
      body += chunk;
    });
    res.on('error', function(e) {
      cb(e.message);
    });
    res.on('end', function() {
      var resultObject={};
      try{resultObject = JSON.parse(body);}
      catch(e){
        cb(e.message);
        resultObject=false;
      }
      if(resultObject)
        cb(null, resultObject);
      else {
        //console.log('end');
      }
    });
  });

  req.on('error', function(e) {
    console.log('error');
    cb('error', e);
  });
  
  
  req.on('socket', function () {
    req.setTimeout(timeout);
  });
  req.on('timeout', function() {
    req.abort();
    cb('timeout');
  });
  req.write(data);
  req.end();
}
var defaultPort = 80;
var defaultTimeout = 200;
var defaultHost = '';
var defaultPath = '/';
var defaultReqJson = {};
var defaultCb = false;
function parseParams()
{
  //console.log(arguments[0]);
  var arguments = arguments[0];
  var host=defaultHost, 
      port=defaultPort, 
      path=defaultPath, 
      json=defaultReqJson, 
      cb=defaultCb, 
      timeout=defaultTimeout;
  // iterate through non-separator arguments
  for (var i = 0; i < arguments.length; i++) {
    switch(typeof(arguments[i]))
    {    
      case('function'):
        cb = arguments[i];
        break;
      case('object'):
        json = arguments[i];
        break;
      case('string'):
        if(arguments[i].indexOf('/')==0){
            path = arguments[i];
            break;
        } else {
          host = arguments[i];
        }
        break;
      case('number'):
        port = arguments[i];
        //timeout = arguments[i];
        break;
      default:
        break;
    }
  }
  console.log({ host: host,  port: port, path: path, json: json, timeout: timeout, cb: cb});
  return { host: host,  port: port, path: path, json: json, cb: cb, timeout: timeout};
}
module.exports.defaultPort = function(port)
{
  defaultPort = port;
}
module.exports.defaultHost = function(host)
{
  defaultHost = host;
}
module.exports.getJSON = function()
{
  args = parseParams(arguments);
  Request(args.host, args.port, args.path, "GET", args.json, args.timeout, args.cb);
}
module.exports.headJSON = function()
{
  args = parseParams(arguments);
  Request(args.host, args.port, args.path, "HEAD", args.json, args.timeout, args.cb);
}
module.exports.postJSON = function()
{
  args = parseParams(arguments);
  Request(args.host, args.port, args.path, "POST", args.json, args.timeout, args.cb);
}
module.exports.putJSON = function()
{
  args = parseParams(arguments);
  Request(args.host, args.port, args.path, "PUT", args.json, args.timeout, args.cb);
}
module.exports.deleteJSON = function()
{
  args = parseParams(arguments);
  Request(args.host, args.port, args.path, "DELETE", args.json, args.timeout, args.cb);
}
module.exports.optionsJSON = function()
{
  args = parseParams(arguments);
  Request(args.host, args.port, args.path, "OPTIONS", args.json, args.timeout, args.cb);
}
module.exports.copyJSON = function()
{
  args = parseParams(arguments);
  Request(args.host, args.port, args.path, "COPY", args.json, args.timeout, args.cb);
}
module.exports.moveJSON = function()
{
  args = parseParams(arguments);
  Request(args.host, args.port, args.path, "MOVE", args.json, args.timeout, args.cb);
}
module.exports.searchJSON = function()
{
  args = parseParams(arguments);
  Request(args.host, args.port, args.path, "SEARCH", args.json, args.timeout, args.cb);
}
module.exports.updateJSON = function()
{
  args = parseParams(arguments);
  Request(args.host, args.port, args.path, "UPDATE", args.json, args.timeout, args.cb);
}