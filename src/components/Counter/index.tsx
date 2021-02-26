/*
 * @Description: counter
 * @Date: 2021-02-25 22:47:57
 * @Author: LeiLiu
 */
import { memo } from "react";
import { useSelector } from "react-redux";
import { StateType } from "@/store/state";

function Counter() {
  console.log(1);
  const count = useSelector<StateType>((state) => state.count);

  return <>{count}</>;
}

export default memo(Counter);
