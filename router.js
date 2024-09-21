function route(pathname, handle,response){
    console.log('pathname :'+ pathname); 

    if(typeof handle[pathname] == 'function'){
    handle[pathname](response);  //requestHandler에서 변수처럼 만들었지만,exports되면서값을 호출할 수 있게 됨 (함수처럼..?)
    }else{
        response.writeHead(404,{'Content-Type' : 'text/html'});
        response.write('Not Found'); 
        response.end();
    }
}

exports.route = route;