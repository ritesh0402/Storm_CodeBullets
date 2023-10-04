const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 5000;

const httpsOptions = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
}

app.use(cors({
    origin: ['https://127.0.0.1:5173', 'https://localhost:5173'],
    credentials: true
}));

app.use(bodyParser.json({
    extended: true
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("/");
});

const httpsServer = https.createServer(httpsOptions, app);

httpsServer.listen(port, () => {
    console.log(`Server running on https://127.0.0.1:${port}`);
});