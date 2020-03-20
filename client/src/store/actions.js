const actions = {
    setUser({commit},data){
        commit("setUser",data)
    },
    setisAuthenticated({commit},data){
        commit("setisAuthenticated",data)
    }
}

export default actions;