/*
 * @Description: reducer
 * @Date: 2021-02-25 22:51:15
 * @Author: LeiLiu
 */
import state from "./state";
import * as TYPES from "./types";

interface Action {
  type: string;
  value?: any;
}

export default function reducer(prevdata = state, action: Action) {
  switch (action.type) {
    case TYPES.CHANGE_COUNT:
      return { ...prevdata, count: action.value };
    case TYPES.CHANGE_KUGOU_RANK:
      return { ...prevdata, kugouRank: action.value };
    default:
      return prevdata;
  }
}
