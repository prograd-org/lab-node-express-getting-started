var http = require('http');



http.createServer((req, res) => {
    res.write("Welcome ProGrads! Using Node Server");
    res.end();
}).listen(3000, () => console.log("Node server started at port 3000"));

//Express server
const express = require('express');
var app = express();


app.get('/', (req, res) => {
    res.send("Welcome ProGrads! Using express server");

});
app.get('/sample', (req, res) => {
    res.send("Sample Express page");
});

app.listen(4000, () => console.log("Express server started at port 4000"));