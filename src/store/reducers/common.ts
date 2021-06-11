import * as TYPES from "../types";

export const count = (state = 0, action: Store.Action) => {
  switch (action.type) {
    case TYPES.CHANGE_COUNT:
      return action.value;
    default:
      return state;
  }
};

export const kugouRank = (state = [], action: Store.Action) => {
  switch (action.type) {
    case TYPES.CHANGE_KUGOU_RANK:
      return action.value;
    default:
      return state;
  }
};
