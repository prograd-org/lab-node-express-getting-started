//Node Server
var http = require('http');
http.createServer((req,res)=>{
    res.write("Welcome to Node Server");
    res.end();
}).listen(3000,()=>console.log("Node Server 3000 started"));

//Express Server
const express =require('express');
var app = express();
app.get('/',(req,res)=>{
    res.send("Welcome to Express Server");
});
app.get('/sample',(req,res)=>{
    res.send("Sample Express");
});
app.listen(4000,()=>console.log("Expess Server 4000 started"));