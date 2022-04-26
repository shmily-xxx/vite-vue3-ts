interface State {
  userInfo:any
}
const state: State = {
  userInfo:{}
};
const mutations= {
  SET_USER (state:any, data:any) {
    state.userInfo =data
  }
}
const actions= {
  // SET_USER_ACTION ({ commit, state }) {
  //   console.log(state)
  //   commit('increment')
  // },
  SET_USER_ACTION (context:any,data:any) {
    console.log(context,"xxxxxxxxxxx")
    context.commit('SET_USER',data)
  },
  SET_USER_ACTION1(context:any){
    context.commit('increment')
  }
}
export default {
  state,
  mutations,
  actions,
  namespaced: true
};