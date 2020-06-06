const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');

const optionalPath = (...pathParts) => {
  const fullPath = path.join(__dirname, ...pathParts);
  return fs.existsSync(fullPath) ? [fullPath] : [];
};

module.exports = () => {
  const { NODE_ENV = 'production', WEBPACK_ANALYZE = false } = process.env;

  return {
    mode: NODE_ENV === 'production' ? 'production' : 'development',
    entry: [...optionalPath('scss/style.scss'), path.resolve(__dirname, 'src')],
    output: {
      path: path.resolve(__dirname, '..'),
      publicPath: '/'
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      alias: {
        react: path.resolve(__dirname, 'node_modules/react'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom')
      }
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.(ts|js)x?$/,
              use: ['babel-loader'],
              exclude: /node_modules/
            },
            {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
            },
            {
              test: /\.(scss|sass)$/,
              use: [
                'style-loader',
                'css-loader',
                {
                  loader: 'sass-loader',
                  options: { implementation: require('sass') }
                }
              ]
            },
            {
              test: /\.(bmp|gif|jpe?g|png)$/,
              use: { loader: 'url-loader', options: { limit: 10000 } }
            },
            {
              use: 'file-loader',
              exclude: /\.(js|mjs|jsx|ts|tsx|html|json)$/
            }
          ]
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: ['public']
      })
    //   new HtmlWebpackPlugin({
    //     inject: true,
    //     hash: true,
    //     template: path.join(__dirname, 'public/index.html'),
    //     favicon:
    //       optionalPath('public/favicon.png')[0] ||
    //       optionalPath('public/favicon.ico')[0] ||
    //       optionalPath('public/favicon.gif')[0] ||
    //       optionalPath('public/favicon.jpg')[0]
    //   }),
    //   ...(WEBPACK_ANALYZE ? [new BundleAnalyzerPlugin()] : [])
    ],
    // devServer: {
    //   historyApiFallback: true
    // }
  };
};
