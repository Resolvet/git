const mutations = {
    setUser (state,data) {
        state.user = data;
    },
    setisAuthenticated (state,data) {
        state.isAuthenticated = data;
    }
}

export default mutations