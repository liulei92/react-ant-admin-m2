/*
 * @Description: useFetchData
 * @Date: 2021-02-26 09:42:06
 * @Author: LeiLiu
 */
import { useState, useEffect } from "react";
import { AxiosRequestConfig } from "axios";
import axios from "@/utils/axios";

export default function useFetchData(
  config: AxiosRequestConfig,
  deps: any[] = []
) {
  const [response, setResponse] = useState<any>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(config)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setResponse(res);
        }
      })
      .finally(() => {
        setLoading(false);
      });
    return () => {
      // clearEffect
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config, ...deps]);

  return [response, loading];
}
