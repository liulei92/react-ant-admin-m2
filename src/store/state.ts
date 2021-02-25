/*
 * @Description: state
 * @Date: 2021-02-25 22:51:21
 * @Author: LeiLiu
 */

export type StateType = {
  count: number;
  kugouRank: any[];
};

const state: StateType = {
  count: 0,
  kugouRank: [],
};

export default state;
