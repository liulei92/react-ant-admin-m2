/*
 * @Description: axios.ts
 * @Date: 2021-02-26 09:22:57
 * @Author: LeiLiu
 */
import axios from "axios";

const Axios = axios.create({
  // baseURL: "",
  timeout: 5e4,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    // "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
  },
  // x-www-form-urlencoded data需进行格式化
  // transformRequest: [function(data) { // 对 data 进行任意转换处理，只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  //   return qs.stringify(data);
  // }]
});

// http request请求拦截器(所有请求发送都要执行的操作)
Axios.interceptors.request.use(
  (config: any) => {
    // 根据环境设置baseURL
    // config.baseURL = baseUrl;
    // if (!config.url.endsWith('/auth/token') || !config.url.endsWith('/user/register') || !config.url.endsWith('/tradeCompany/add')) {
    //   config.headers.token = sessionStorage.getItem('access_token') || null;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// http response响应拦截器
Axios.interceptors.response.use(
  (response: any) => {
    // 这里可以做一些响应拦截的操作
    if (response.status === 200) {
      if (response.data.code === "401") {
        // 登录失效或者token 过期;400: 用户登陆失败  || response.data.code === '400'
        // Vue.prototype.$message.error(response.message);
        // store.dispatch('global/logout');
        // router.push({
        //   path: '/login'
        // });
      } else if (response.data.code === "404") {
        // 接口404返回到404页面
        // router.push({
        //   path: '/404'
        // });
      }
      return response.data;
    } else if (response.status === 404) {
      // 接口404返回到404页面
      // router.push({
      //   path: '/404'
      // });
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Axios;
