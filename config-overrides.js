/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { override, fixBabelImports, addLessLoader, useBabelRc, addWebpackAlias, addBabelPlugins } = require('customize-cra');

module.exports = override(
  useBabelRc(),
  ...addBabelPlugins('@babel/plugin-proposal-nullish-coalescing-operator', '@babel/plugin-proposal-optional-chaining'),
  addWebpackAlias({ environment: path.join(__dirname, 'src', 'environments', process.env.CLIENT_ENV) }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@heading-color': 'default',
        '@body-background': 'default',
      },
    },
  })
);
