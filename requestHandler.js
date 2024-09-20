//라우터가 루트를 분배해서 각 경로를 알려주고 나면 요청을 처리하는 역할
function main(){
    console.log('main');
}
function login(){
    console.log('login');
}


let handle = {}; //ke : value 쌍
handle['/']= main;
handle['login']=login;

exports.handle = handle;