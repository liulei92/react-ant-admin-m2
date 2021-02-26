/*
 * @Description: action
 * @Date: 2021-02-25 22:51:08
 * @Author: LeiLiu
 */
import { Dispatch } from "redux";
import * as TYPES from "./types";
import axios from "@/utils/axios";

export function changeCount(value: any) {
  return { type: TYPES.CHANGE_COUNT, value };
}

export function kugouRankGet() {
  return async (dispatch: Dispatch) => {
    const result = await axios({
      url: "api/rank/list",
      method: "get",
      params: {},
    });
    dispatch({
      type: TYPES.CHANGE_KUGOU_RANK,
      value: result?.data?.data || [],
    });
  };
}
