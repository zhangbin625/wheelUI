const {
  addWebpackExternals,
  override,
  addWebpackAlias,
  fixBabelImports,
  addLessLoader,
  addPostcssPlugins,
  addWebpackModuleRule
} = require('customize-cra');
const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const path = require('path')
const postcss = require("./postcss.config.js");
const postcssPlugin = Object.keys(postcss).map(key =>
  require(key)(postcss[key])
);
module.exports = override(
  addWebpackAlias({
    "react-dom": "@hot-loader/react-dom",
    "page": path.resolve('src/page'),
    "components": path.resolve('src/components')
  }),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  // addWebpackExternals({
  //   "@": '@',
  // }),
  addLessLoader({
    javascriptEnabled: true
  }),
  addPostcssPlugins(postcssPlugin),
  (config, env) => rewireReactHotLoader(config, env)
)