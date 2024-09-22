let server = require('./server.js');
let router = require('./router');
let requestHandler =require('./requestHandler');

//db연결
const mariadb = require('./database/connect/mariadb'); 
mariadb.connect();


server.start(router.route, requestHandler.handle);
