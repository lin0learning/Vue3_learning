import { defineStore } from 'pinia'
import useUser from './user'

const useCounter = defineStore("counter", {
    // 官方写法
    // state: () => {
    //     return {
    //         count: 99
    //     }
    // }
    // 增强写法
    state: () => ({
        count: 99,
        friends: [
            {id: 111, name: "joyboy"},
            {id: 112, name: "luffy"},
            {id: 113, name: "monkey"}
        ]
    }),
    getters: {
        doubleCount(state) {
            return state.count * 2
        },
        // 在一个getter中引入另一个getter, this
        dbCountAddOne() {
            return this.doubleCount + 1
        },
        // 引用其他store中数据
        refData() {
            const userStore = useUser()
            return `dbCount:${this.dbCountAddOne} - user:${userStore.name}`
        },
        // 返回一个函数
        getFriendById(state) {
            return function(id) {
                for (let i = 0; i < state.friends.length; i++) {
                    const friend = state.friends[i]
                    if (friend.id === id) {
                        return friend
                    }
                }
            }
        }
    }

})

export default useCounter