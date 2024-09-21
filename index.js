let server = require('./server.js');
let router = require('./router');
let requestHandler =require('./requestHandler');
server.start(router.route, requestHandler.handle);
