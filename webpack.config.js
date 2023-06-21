const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    main: './src/js/index.js',
    old: './src/js/.old/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '/dist'),
    publicPath: '../'
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/')
    },
    compress: true,
    port: 9001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  }
}
