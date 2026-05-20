const path = require('path')

const common = {
  mode: 'production',
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

module.exports = [
  {
    // for main
    ...common,
    entry: './src/js/index.js',
    output: {
      filename: 'main.bundle.js',
      path: path.join(__dirname, '/dist'),
      publicPath: '../'
    }
  },
  {
    // for old
    ...common,
    entry: './src/js/.old/index.js',
    output: {
      filename: 'old.bundle.js',
      path: path.join(__dirname, '/dist'),
      publicPath: '../dist/'
    }
  }
]
