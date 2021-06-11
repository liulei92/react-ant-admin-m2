import * as TYPES from "../types";

export const uuid = (state = "", action: Store.Action) => {
  switch (action.type) {
    case TYPES.CHANGE_RANDOM_UUID:
      return action.value;
    default:
      return state;
  }
};
