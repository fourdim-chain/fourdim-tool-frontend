const webpack = require('webpack')

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            webpackConfig.resolve.fallback = {
                buffer: require.resolve('buffer'),
            };

            webpackConfig.plugins.push(
                new webpack.ProvidePlugin({
                    Buffer: ['buffer', 'Buffer'],
                })
            );
            return webpackConfig;
        }
    }
};