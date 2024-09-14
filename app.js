const http = require('http');

let hostname="127.0.0.1";
let port="3000";

const server =http.createServer((req, res)=>{
    let urlPath = req.url;
    if(urlPath==="/"){
        res.writeHead(200, { "Content-Type":"text/html" });
        res.end("<h1 style='color:red; display:flex; justify-content:center'>Hello All...</h1><br><h2 style='color:blue; display:flex; justify-content:center'>This is HOME page.</h2>");
    }
    else if(urlPath==="/get"){
        res.writeHead(200, { "Content-Type":"application/json" });
        let obj={
            "name":"Srinivas",
            "content":"Running in cloud..."
        }
        res.end(JSON.stringify(obj));
    }
    else{
        res.writeHead(404, { "Content-Type":"text/plain" });
        res.end("404 - Page Not Found");
    }
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at  http://${hostname}:${port}/`);
})