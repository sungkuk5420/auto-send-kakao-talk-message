import { T } from "./types";
import { ajaxActions } from "./ajaxActions";

export const actions = {
  [T.CHANGE_MODAL_VISIBLE]({ commit }) {
    // console.log(`store action [T.CHANGE_MODAL_VISIBLE]`);
    commit(T.CHANGE_MODAL_VISIBLE);
  }
};
