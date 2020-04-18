const express = require('express');

const fs = require('fs');
const http = require('http');
const https = require('https');

const app = express();

const publicDir = 'dist';
const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/goralex.com/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/goralex.com/cert.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/goralex.com/chain.pem')
};

app.use(express.static(publicDir));

app.get('/*', function (req, res) {
    res.sendFile('index.html', {root: publicDir});
});

http.createServer((req, res) => {
    res.writeHead(301, {"Location": "https://" + req.headers['host'] + req.url});
    res.end();
}).listen(80);

https.createServer(options, app).listen(443);