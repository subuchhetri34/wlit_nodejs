import http from "http";
import fs from "fs";

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;

    if (url == '/home'){
        res.end("this is home");
    }
    else{
        res.end("other page");
    }
    //console.log (req);
    console.log("incoming request url",url);
    console.log("incoming request method",method);

   // res.end('Hello World\n');
});

const PORT = 3000;
server.listen(PORT,() =>{
    console.log(`Server running at http://localhost:${PORT}/`);
})