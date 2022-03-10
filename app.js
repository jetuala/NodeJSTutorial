const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello! Welcome to our home page.')
    }
    if (req.url === '/about') {
        res.end('Hello! Here is our history.')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find that page here.</p>
    <a href="/">Back home</a>`);
})

server.listen(5000)