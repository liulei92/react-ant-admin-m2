/*
 * @Description: Home
 * @Date: 2021-02-25 17:58:36
 * @Author: LeiLiu
 */
import { useCallback, useEffect } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import Counter from "@/components/Counter";
import { changeCount, kugouRankGet } from "@/store/action";

export default function Home(props: any) {
  const dispatch = useDispatch();
  const changeCountHandler = useCallback(() => {
    const value = Math.floor(Math.random() * 10);
    dispatch(changeCount(value));
  }, [dispatch]);

  useEffect(() => {
    dispatch(kugouRankGet());
    return () => {
      // clearEffect
    };
  }, []);

  return (
    <div>
      Home
      <br />
      <Counter />
      <Button onClick={changeCountHandler}>Change Count</Button>
    </div>
  );
}
