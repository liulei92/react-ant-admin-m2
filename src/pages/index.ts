/*
 * @Description: 导出所有页面
 * @Date: 2021-02-25 18:00:06
 * @Author: LeiLiu
 */
// 路由懒加载
import { lazy } from "react";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

export { Home, About };
