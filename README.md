# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## run eject 后添加依赖

### 兼容ie11
```
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
```

### webpack添加 alias
```
config/modules.js文件中的webpackAliases的alias是解析项目根目录下的tsconfig.json或者jsconfig.json来返回的，有点复杂

可以直接在webpack.config.js的resolve.alias字段中的末尾新增字段

resolve: {
  // ...
  alias: {
    // ...
    '@': path.resolve(__dirname, '../src')
  }
}
```

### 解决跨域，反向代理配置
```
src目录下新建setupProxy.js
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api", {
    target: 'http://m.kugou.com?json=true',/*这里写自己的代理地址*/
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      '^/api': ''
    },
  }))
}
```

### 关闭自动开启浏览器配置
```
在scripts/start.js文件，注释掉openBrowser(urls.localUrlForBrowser)即可，
或者使用环境变量BROWSER

{
  "script": {
    "start": "cross-env BROWSER=none node scripts/start.js"
  }
}
```

### 生产环境关闭 sourcemap
```
查看 webpack.config.js 看到如下代码

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';

以在命令行中使用GENERATE_SOURCEMAP这个环境变量
{
  "script": {
    "build": "cross-env GENERATE_SOURCEMAP=false node scripts/build.js"
  }
}
```

### 编译进度条配置
```
yarn add webpackbar

修改webpack.config.js文件
const WebpackBar = require('webpackbar')
plugins: [
  // ...
  new webpack.ProgressPlugin(),
  new WebpackBar()
]

webpack.ProgressPlugin() 是webpack内置插件，webpack.ProgressPlugin，WebpackBar用来显示编译时长
```

### 生成 report.html 可视化打包分析
```
yarn add webpack-bundle-analyzer

修改webpack.config.js文件
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const isBundleAnalyzer = process.env.GENERATE_BUNDLE_ANALYZER_REPORT === 'true'
plugins: [
  // ...
  isEnvProduction && isBundleAnalyzer && new BundleAnalyzerPlugin()
]

通过设置环境变量GENERATE_BUNDLE_ANALYZER_REPORT=true来生成report
```

### eslint

### typescript

### 安装 antd

```
yarn add antd

antd 需要 less 和 less-loader ^6.1.0

按需加载 babel-plugin-import
package.json
"babel": {
  "presets": [
    "react-app"
  ],
  "plugins": [
    [
      "babel-plugin-import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": true
      }
    ]
  ]
}

moment 替换为 dayjs
https://ant.design/docs/react/replace-moment-cn

自定义主题
webpack.config.js

wepack.config.js配置，默认的rules已经包含css和sass，先找到下面的正则
// 加上匹配 less 文件的正则
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;

然后加上 loader 配置，在sass-loader配置下面加上less-loader的配置
// Adds support for CSS Modules, but using SASS
// using the extension .module.scss or .module.sass
{
  test: sassModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 3,
      sourceMap: isEnvProduction && shouldUseSourceMap,
      modules: {
        getLocalIdent: getCSSModuleLocalIdent,
      },
    },
    'sass-loader'
  ),
},
// 在下面加上 less-loader 配置
{
  test: lessRegex,
  exclude: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
    },
    'less-loader'
  ),
  sideEffects: true,
},
// Adds support for CSS Modules, but using less
// using the extension .module.less
{
  test: lessModuleRegex,
  use: getStyleLoaders(
    {
      importLoaders: 2,
      sourceMap: isEnvProduction && shouldUseSourceMap,
      modules: {
          getLocalIdent: getCSSModuleLocalIdent
      }
    },
    'less-loader'
  ),
},

找到getStyleLoaders方法，做如下修改：
// 将 if (preProcessor) {} 中的代码替换，实际上就是判断是`less-loader`就生成针对less的options
if (preProcessor) {
  let preProcessorRule = {
    loader: require.resolve(preProcessor),
    options: {
      sourceMap: true
    }
  }
  if (preProcessor === 'less-loader') {
    preProcessorRule = {
      loader: require.resolve(preProcessor),
      options: {
        sourceMap: true,
        lessOptions: { // 如果使用less-loader@5，需要移除 lessOptions 这一级
          javascriptEnabled: true,
          modifyVars: {
            'primary-color': '#346fff', // 全局主色
            'link-color': '#346fff' // 链接色
          }
        }
      }
    }
  }
  loaders.push(
    {
      loader: require.resolve('resolve-url-loader'),
      options: {
        sourceMap: isEnvProduction && shouldUseSourceMap,
      },
    },
    preProcessorRule
  );
}
```