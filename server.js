const path = require("path");

const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

function createServer() {
    const server = express();
    server.get('/service-worker.js', async (req, res) => {
        const filePath = path.join(__dirname, '.next', '/service-worker.js');
        await app.serveStatic(req, res, filePath);
    });
    server.get("*", (req, res) => handle(req, res));
    return server;
}

const server = createServer();

const prepareP = app.prepare().then(() => {
    console.log("App prepared");
    if (process.env.IN_LAMBDA !== 'true') {
        console.log("Starting server on: "+port);
        server.listen(port, err => {
            if (err) throw err;
            console.log(
              `> Ready on http://localhost:${port}`
            );
          });
    }
});

module.exports = {appServer: server, prepareP};