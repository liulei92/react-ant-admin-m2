/*
 * @Description: store
 * @Date: 2021-02-25 22:49:45
 * @Author: LeiLiu
 */
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer";

/* enhancer是对store的增强，可以增强store的api
redux中的中间件，比如thunk， 增强的是store.dispatch
composedEnhancers 是一个洋葱模型，一个函数执行完，它的结果会当做上一个函数的入参 */
export default function _createStore() {
  const middlewares = [thunk];
  const enhancers = applyMiddleware(...middlewares);
  const composedEnhancers = composeWithDevTools(...[enhancers]);
  const store = createStore(reducer, composedEnhancers);

  return store;
}
