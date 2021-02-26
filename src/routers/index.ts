/*
 * @Description: routers.ts
 * @Date: 2021-02-25 17:57:37
 * @Author: LeiLiu
 */
import { Home, About, Hooks } from "@/pages";

export type RouterType = {
  path: string;
  component: React.LazyExoticComponent<any>;
  root: string[];
  notExect?: boolean;
};

// 总路由
const Routers: RouterType[] = [
  {
    path: "/home",
    component: Home,
    root: [],
  },
  {
    path: "/about",
    component: About,
    root: [],
  },
  {
    path: "/hooks",
    component: Hooks,
    root: [],
  },
];

export { Routers };
