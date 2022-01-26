const http=require('http');
const express=require('express')
const server=http.createServer(function(req,res){
    if(req.url==='/'){
        res.end('This is a Homepage')
    }
    else if(req.url==='/http'){
        res.end('This is a http node server page')
    }
    else{
        res.end('Oops')
    }
})
server.listen(3000,()=>console.log('The server is running on port 3000'))
const app=express();
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/express',(req,res)=>{
    res.send("express page")
    res.send
})
app.listen(3001,()=>console.log('The server is running on port 3001'))