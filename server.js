const RestProxy = require('sp-rest-proxy');
 
const settings = {
    configPath: './config/private.json', 
    port: 8089, // Local server port
    //staticRoot: './static'              
};
 
const restProxy = new RestProxy(settings);
restProxy.serve();