const awsServerlessExpress = require('aws-serverless-express');
process.env.IN_LAMBDA = true;
process.env.NODE_ENV = "production";

const appServer = require("./server");

const server = awsServerlessExpress.createServer(appServer);
const handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
console.log("handler", handler);
exports.handler = handler;