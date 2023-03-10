const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); /* React components를 위한 Fast Refresh */

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    open: true,
  },
  devtool: 'eval-source-map',
  plugins: [new ReactRefreshWebpackPlugin()],
});
