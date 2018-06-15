const serverless = require("serverless-http");
const server = require("./server");
process.env.IN_LAMBDA = true;
process.env.NODE_ENV = "production";

const binaryMimeTypes = [
    "application/javascript",
    "application/json",
    "application/octet-stream",
    "application/xml",
    "binary/octet-stream",
    "image/jpeg",
    "image/png",
    "image/gif",
    "text/comma-separated-values",
    "text/css",
    "text/html",
    "text/javascript",
    "text/plain",
    "text/text",
    "text/xml",
    "image/x-icon",
    "image/svg+xml",
    "application/font-woff2",
    "application/font-woff",
    "font/woff",
    "font/woff2"
];

let handler = null;

module.exports.handler = (evt, ctx, callback) => {
    const {appServer, prepareP} = server;
    let initializerP;
    if (handler === null) {
        initializerP = prepareP.then(() => {
            handler = serverless(appServer, {
                binary: binaryMimeTypes
            });
        });
    } else {
        initializerP = Promise.resolve();
    }
    initializerP.then(() => handler(evt, ctx, callback)).catch((err) => {
        console.log('failure', err);
    });
};