const mariadb = require('mysql'); //모듈 불러오기

const conn = mariadb.createConnection( //masql 모듈이 가지고 있는 함수
    {
        host : 'localhost',
        port :3307,  
        user :'root',
        password: 'root',
        database : 'Tennis'
    }

);

module.exports = conn;  //module로 사용하려고 conn내보냄
