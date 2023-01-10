const user = {
    namespaced: true,
    state: {
        userCount: 99
    },
    mutations: {
        incrementUC(state) {
            state.userCount++
        }
    },
    getters: {
        calcCount(state, getters, rootState) {
            return state.userCount + rootState.counter
        }
    },
    actions: {
        calcAction(context) {
            context.commit("incrementUC")
        }
    }
}

export default user