/*
 * @Description:
 * @Date: 2021-02-26 11:24:00
 * @Author: LeiLiu
 */
import * as Types from "./types";

export function changeCount(value: number) {
  return {
    type: Types.CHANGE_COUNT,
    value,
  };
}
