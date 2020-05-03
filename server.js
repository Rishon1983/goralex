import express from 'express';
import fs from 'fs';
import http from 'http';
import https from 'https';

const app = express();

const publicDir = 'dist';

app.use(express.static(publicDir));

app.get('/*', function (req, res) {
    res.sendFile('index.html', {root: publicDir});
});

//check production or dev
if(process.env.NODE_ENV === undefined || process.env.NODE_ENV.trim() !== 'dev'){
    const options = {
        key: fs.readFileSync('/etc/letsencrypt/live/goralex.com/privkey.pem'),
        cert: fs.readFileSync('/etc/letsencrypt/live/goralex.com/cert.pem'),
        ca: fs.readFileSync('/etc/letsencrypt/live/goralex.com/chain.pem')
    };
    http.createServer((req, res) => {
        res.writeHead(301, {"Location": "https://" + req.headers['host'] + req.url});
        res.end();
    }).listen(80);

    https.createServer(options, app).listen(443);
} else {
    app.listen(80, () => {
        console.log('Dev server started');
    });
}
