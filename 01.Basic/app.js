//here we are creating the first web server
const http = require('http');
const port = 3000;
const server = http.createServer((req,res)=>{
    //console.log(req);
    console.log(req.url,req.method,req.headers);
    //process.exit(); // used for exiting 'event loop'

    //using res
    res.setHeader('Content-Type','text/html'); // we can also send json data
    res.write('<html>');
    res.write('<head><title>Demo server page</title></head>');
    res.write('<body><h1>Welcome to the demo server</h1></body>');
    res.write('</html');
    res.end();
});
server.listen(port,()=>{
    console.log(`port is running  at ${port}`)
});

// to kill the server press "control + c"