process.env.IN_LAMBDA = true;
process.env.NODE_ENV = "production";

const serverless = require("serverless-http");
const { appServer, prepareP } = require('./server');

let handler = null;
async function initializeHandler() {
    let initializerP;
    if (handler === null) {
        await prepareP;
        handler = serverless(appServer);
    } else {
        initializerP = Promise.resolve();
    }
    await initializerP;
}

module.exports.handler = async (evt, ctx, callback) => {
    await initializeHandler();
    try {
        return await handler(evt, ctx, callback);
    } catch (error) {
        logger.error({ error }, 'failed to handle request');
    }
};
