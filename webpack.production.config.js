const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, 
  	  	loader: 'babel-loader', 
  	  	exclude: /node_modules/,
  	  	query: {
  	  		plugins: ['transform-decorators-legacy']
  	  	}
  	  },
      { test: /\.css$/, loader: 'style-loader'},
      { test: /(\.scss|\.sass)$/, loader: 'sass-loader'},
      { test: /\.less$/, loader: 'less-loader'},
      {
		  test: /\.css$/,
		  loader: 'css-loader',
		  query: {
		    modules: true,
		    localIdentName: '[local]'
		  }
	  },
	  {test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]'}
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}