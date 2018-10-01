process.env.IN_LAMBDA = true;
process.env.NODE_ENV = "production";

const serverless = require("serverless-http");
const server = require("./server");

let handler = null;

module.exports.handler = (evt, ctx, callback) => {
    const {appServer, prepareP} = server;
    let initializerP;
    if (handler === null) {
        initializerP = prepareP.then(() => {
            handler = serverless(appServer);
        });
    } else {
        initializerP = Promise.resolve();
    }
    initializerP.then(() => handler(evt, ctx, callback)).catch((err) => {
        console.log('failure', err);
    });
};