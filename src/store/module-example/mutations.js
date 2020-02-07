import { T } from "./types";

export const mutations = {
  [T.GET_FRIEND_LIST](state, result) {
    console.log(`mutation [T.GET_FRIEND_LIST] ${result}`);
    state.friendList = result;
  }
};
