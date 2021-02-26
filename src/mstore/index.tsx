/*
 * @Description: mstore 一个简易 store
 * @Date: 2021-02-26 10:56:24
 * @Author: LeiLiu
 */
import { createContext } from "react";

export interface StateType {
  count: number;
}

export const DEFAULT_STATE = {
  count: 0,
};

type MixStateAndDispatch = {
  state: StateType;
  dispatch: React.Dispatch<any>;
};

const StoreContext = createContext<MixStateAndDispatch>({
  state: DEFAULT_STATE,
  dispatch: (action) => {
    console.log("do something");
  },
});

export default StoreContext;
