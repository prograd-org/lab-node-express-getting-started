var http = require('http');

http.createServer((req,res)=>{
res.write("Welcome Madhuri! You're using NodeJS Server");
res.end();

}).listen(3000,()=>console.log("Node server started at port number:3000"));

const express = require('express');
var app = express();

app.get('/',(req,res)=>{
    res.send("Welcome Again Madhuri! You're now using ExpressJS server");
});
 app.get('/sample',(req,res)=>{
     res.send("This a Express.js sample page");
 });
 app.listen(4000,()=>console.log("Express Server started at port number 4000"));