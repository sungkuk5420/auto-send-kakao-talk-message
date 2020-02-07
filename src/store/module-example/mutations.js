import { T } from "./types";

export const mutations = {
  [T.GET_TEAM_CARDS](state, result) {
    // console.log(`mutation [T.GET_TEAM_CARDS] ${result}`);
    state.teamCards = result;
  }
};
