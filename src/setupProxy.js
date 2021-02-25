/*
 * @Description: setupProxy.js
 * @Date: 2021-02-25 15:21:10
 * @Author: LeiLiu
 */
const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/api", {
      target: "http://m.kugou.com?json=true" /*这里写自己的代理地址*/,
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
