const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  context: __dirname,
  entry: './script/main.js',
  devServer: {
    port: 1113,
    open: true,
    hot: true,
    static: {
      directory: './'
    }
  },
  output: {
    clean: true,
    publicPath: './'

  },
  builtins: {
    html: [{
      template: './index.html',
      inject: true
    }]
  }
  
}
