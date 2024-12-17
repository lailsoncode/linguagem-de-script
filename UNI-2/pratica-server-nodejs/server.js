const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'public/index.html');
    let extname = path.extname(filePath);

    switch (req.url) {
        case '/projeto1':
            filePath = path.join(__dirname, 'public/pages/projeto1.html');
            break;
        case '/projeto2':
            filePath = path.join(__dirname, 'public/pages/projeto2.html');
            break;
        case '/projeto3':
            filePath = path.join(__dirname, 'public/pages/projeto3.html');
            break;
        default:
            filePath = path.join(__dirname, 'public', req.url);
            break;
    }

    let contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.png':
            contentType = 'image/png';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content, 'utf8');
                });
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});
const port = 3000

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});