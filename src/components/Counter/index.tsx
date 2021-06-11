/*
 * @Description: counter
 * @Date: 2021-02-25 22:47:57
 * @Author: LeiLiu
 */
import { memo } from "react";
import { useSelector } from "react-redux";

function Counter() {
  const count = useSelector<Store.State>((state) => state.count);

  return <>{count}</>;
}

export default memo(Counter);
