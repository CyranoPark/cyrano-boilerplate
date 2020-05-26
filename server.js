const webpack              = require('webpack');
const webpackDevServer     = require('webpack-dev-server');

const config   = require('./webpack/common.js');
const compiler = webpack(config);
const options  = config.devServer;
const env      = process.env.NODE_ENV || 'development';
const port     = 3000;

webpackDevServer.addDevServerEntrypoints(config, options);

const server = new webpackDevServer(compiler, options);

server.listen(port, () => {
    console.log(`> Ready on port ${port} [${env}]`);
});
