/*
 * @Description: counter
 * @Date: 2021-02-25 22:47:57
 * @Author: LeiLiu
 */
import { useSelector } from "react-redux";
import { StateType } from "@/store/state";

export default function Counter() {
  const count = useSelector<StateType>((state) => state.count);

  return <>{count}</>;
}
