import state from './state'
import { mutations } from './mutations'
import { getters } from './getters'
import { actions } from './actions'
export default {
  namespaced: false,
  getters,
  mutations,
  actions,
  state
}
