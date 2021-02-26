/*
 * @Description: reducer
 * @Date: 2021-02-26 10:59:03
 * @Author: LeiLiu
 */
import * as Types from "./types";
import { StateType } from "./index";

type ActionType = {
  type: string;
  value: any;
};

export default function reducer(state: StateType, action: ActionType) {
  switch (action.type) {
    case Types.CHANGE_COUNT:
      return { ...state, count: action.value || 0 };

    default:
      return { ...state };
  }
}
