const configuration = {
    exportPathMap: () => {
        return {"/": {page: "/"}};
    },
    webpack: (config) => {
        return config
    }
};

if(process.env.IN_LAMBDA) {
    module.exports = configuration;
} else {
    const withOffline = require('next-offline');
    module.exports = withOffline(configuration);
}
