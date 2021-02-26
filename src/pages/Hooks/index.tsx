/*
 * @Description: Hooks
 * @Date: 2021-02-26 09:27:00
 * @Author: LeiLiu
 */
import { useReducer } from "react";
import StoreContext, { DEFAULT_STATE } from "@/mstore";
import reducer from "@/mstore/reducer";
import Counter from "./counter";

export default function Hooks() {
  const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);
  const store = { state, dispatch };

  return (
    <StoreContext.Provider value={store}>
      {state.count}
      <Counter />
    </StoreContext.Provider>
  );
}
