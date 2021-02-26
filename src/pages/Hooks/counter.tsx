/*
 * @Description: counter
 * @Date: 2021-02-26 11:34:09
 * @Author: LeiLiu
 */
import { useContext, memo } from "react";
import StoreContext from "@/mstore";
import { changeCount } from "@/mstore/action";

function Counter() {
  const { state, dispatch } = useContext(StoreContext);

  return (
    <button onClick={() => dispatch(changeCount(state.count + 1))}>Add</button>
  );
}

export default memo(Counter);
