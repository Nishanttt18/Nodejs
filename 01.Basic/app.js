//here we are creating the first web server
const http = require('http');
const port = 3000;
const fs = require('fs');
const os = require('os');
var _ = require('lodash'); // it provides lots of in-built functions for strings,arrays,objects,etc.
const express = require("express");
const app = express();

// const user  = os.userInfo(); //os module provides the information related to the "operating system"
// console.log(user);

//we are creating fs file using writeFile method
// fs.writeFile('info.txt','This file contains the information \n',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("file created successfully");
// })

//here we are adding or updating the content into the existing file
// fs.appendFile('info.txt'," hello this is a demo test and update \n",() =>{
//     console.log("file updated successfully ");
// })


//This is the old method of creating a server -->
// const server = http.createServer((req,res)=>{
//     //console.log(req);
//     console.log(req.url,req.method,req.headers);
//     //process.exit(); // used for exiting 'event loop'

//     //using res
//     res.setHeader('Content-Type','text/html'); // we can also send json data
//     res.write('<html>');
//     res.write('<head><title>Demo server page</title></head>');
//     res.write('<body><h1>Welcome to the demo server</h1></body>');
//     res.write('</html');
//     res.end();
// });
// server.listen(port,()=>{
//     console.log(`port is running  at ${port}`)
// });

//modern way to create routes
app.get('/',(req,res)=>{
    res.send("hello from get request");
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`server is running at port: ${port}`);
})

// to kill the server press "control + c" 