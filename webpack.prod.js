const { merge } = require("webpack-merge");
const common = require("./webpack.common");
/* webpack output 파일의 크기를 시각화하는 패키지 */
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  // plugins: [new BundleAnalyzerPlugin()],
});
