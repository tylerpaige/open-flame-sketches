const routes = require('./routes.js');
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

const entry = routes.reduce((acc, { name, js }) => {
  acc[name] = path.resolve(__dirname, js);
  return acc;
}, {});

const htmls = routes.map(route => {
  const data = route.data
    ? JSON.parse(fs.readFileSync(path.resolve(__dirname, route.data), 'utf8'))
    : {};
  return new HtmlWebpackPlugin({
    filename: route.path,
    template: route.template,
    chunks: [route.name],
    data
  });
});
htmls.push(
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, './src/components/index.hbs'),
    inject: false,
    routes
  })
);
const imgs = routes.reduce((acc, { img }) => {
  if (img) {
    acc.push({
      from: img,
      to : './'
    });
  };

  return acc;
}, []);

module.exports = {
  entry: entry,
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env']]
            }
          }
        ]
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
          helperDirs: [__dirname + '/src/components/helpers']
        }
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: false
            }
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'postcss-loader'
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: './',
              emitFile: true
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [...htmls, new CopyWebpackPlugin(imgs), new HtmlWebpackInlineSVGPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true
  }
};
