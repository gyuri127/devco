//라우터가 루트를 분배해서 각 경로를 알려주고 나면 요청을 처리하는 역할
function main(response){
    console.log('main');

    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write('Main page'); 
    response.end();
}
function login(response){
    console.log('login');

    response.writeHead(200,{'Content-Type' : 'text/html'});
    response.write('Login page'); 
    response.end();
}


let handle = {}; //key : value 쌍
handle['/']= main;
handle['/login']=login;

exports.handle = handle;