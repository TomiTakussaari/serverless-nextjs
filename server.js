const express = require("express");
const next = require("next");
const mobxReact = require('mobx-react');
const path = require("path");

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

mobxReact.useStaticRendering(true);

function createServer() {
    const server = express();
    server.get("/sw.js", (req, res) => app.serveStatic(req, res, path.resolve('./static/sw.js')));
    server.get("*", (req, res) => handle(req, res));
    return server;
}

if (process.env.IN_LAMBDA) {
    module.exports = createServer();
} else {
    app.prepare().then(() => {
        const server = createServer();
        server.listen(port);
    });
}