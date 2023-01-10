<template>
    <div>
        <form>
            账号: <input type="text" v-model="account.username">
            密码: <input type="password" v-model="account.password">
        </form>
        <receive-account :name="name" :age="age"></receive-account>
    </div>
</template>

<script>
import receiveAccount from './receiveAccount.vue'
import { onMounted, reactive, ref } from 'vue'
export default {
    components: {
        receiveAccount
    },
    setup() {
        // 1.reactive的应用场景
        // 1.1.条件一: reactive应用于本地的数据
        // 1.2.条件二: 多个数据之间是有关系/联系(聚合的数据, 组织在一起会有特定的作用)
        const account = reactive({
            username: "coderwhy",
            password: "1234567"
        })

        // 2.ref的应用场景: 其他的场景基本都用ref(computed)
        // 2.1 定义本地的一些简单数据
        const name = ref("why")
        const age = ref(18)

        // 2.2 定义从网络中获取的数据也是使用ref
        const musics = []
        onMounted(() => {
            const servermusics = ["1", "2", "3"]
            musics.value = servermusics
        })

        return {
            account,
            name,
            age,
            musics
        }
    }
}
</script>

<style scoped>
</style>