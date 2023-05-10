const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    main: './src/js/index.js',
    old: './src/js/.old/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name]_bundle.js'
  },
  performance: {
    maxEntrypointSize: 1024000,
    maxAssetSize: 1024000
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '')
    },
    compress: true,
    hot: true,
    port: 9000
  },
  module: {
    rules: [
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
