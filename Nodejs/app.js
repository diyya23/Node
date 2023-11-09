const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers, req.method);  
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>NodeJs</title></head>');
    res.write('<body></h3>This is my NodeJS Server.....</h3></body>');
    res.write('<html>');
    res.end();
})

server.listen(4000)