const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /.(jsx?)$/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /.css$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        }],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent:
    `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title> Proyecto React Diego Crespo #1</title>
        <link rel="icon" 
        type="image/png" 
        href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsLrNi-Rnf1Uob0-kuSqeQ9nKtiJJsSanLw&usqp=CAU" />
      </head>
      <body>
        <div id="root"></div>
      </body>
  </html>`,
  })],
}
