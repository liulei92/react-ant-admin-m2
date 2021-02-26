/*
 * @Description: Home
 * @Date: 2021-02-25 17:58:36
 * @Author: LeiLiu
 */
import { useCallback, useEffect, useState, useRef } from "react";
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

  const [counter, setCounter] = useState(0);
  const likeRef = useRef(0);
  const handleAlert = useCallback(() => {
    console.log(counter);
    console.log(likeRef.current);
  }, [counter, likeRef]);

  useEffect(() => {
    dispatch(kugouRankGet());
    return () => {
      // clearEffect
    };
  }, [dispatch]);

  return (
    <div>
      Home
      <Button
        onClick={() => {
          setCounter(counter + 1);
          likeRef.current++;
        }}
      >
        {counter}
      </Button>
      <button onClick={handleAlert} style={{ marginLeft: "20px" }}>
        alert
      </button>
      <br />
      <Counter />
      <Button onClick={changeCountHandler}>Change Count</Button>
    </div>
  );
}
