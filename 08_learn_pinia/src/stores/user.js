import { defineStore } from 'pinia';

const useUser = defineStore("user", {
    state: () => ({
        name: "dekki",
        age: 20,
        biliName: "liclo"
    })
})

export default useUser