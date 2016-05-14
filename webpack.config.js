var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    APP_DIR + '/index.js',
  ],
  module : {
    loaders : [
      { 
        test: /\.js?$/, 
        loaders: ['react-hot'],
        include: APP_DIR,
      },
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel'
      },
    ]
  },
  output: {
    publicPath: '/js/',
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
