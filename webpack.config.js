// webpack.config.js
// TODO: use babel for IE compatibility
module: {
  loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: [['es2015', { "loose": true }]]
      }
    }
  ]
}