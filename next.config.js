const inLambda = !!process.env.LAMBDA_TASK_ROOT;
const withOffline = !inLambda && require('next-offline');

const configuration = {
    exportPathMap: () => {
        return {"/": {page: "/"}};
    },
    webpack: (config) => {
        return config
    }
};

module.exports = withOffline(configuration);