import { T } from "./types";
import { ajaxActions } from "./ajaxActions";

export const actions = {
  [T.GET_FRIEND_LIST]({ commit }, params) {
    console.log(`store action [T.GET_FRIEND_LIST] `);
    ajaxActions.getFriendList(
      params,
      results => {
        console.log(`action / GET_FRIEND_LIST / success`);
        console.log(" reults=", results);
        // commit(T.GET_FRIEND_LIST, results.data);
        if (params.cb) {
          params.cb(results.data);
        }
      },
      res => {
        console.log(`action / GET_FRIEND_LIST / error`, res);
      }
    );
  }
  // [T.GET_FRIEND_LIST]({ commit }) {
  //   console.log(`store action [T.GET_FRIEND_LIST]`);
  //   commit(T.GET_FRIEND_LIST);
  // }
};
