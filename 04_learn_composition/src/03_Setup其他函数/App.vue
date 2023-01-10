<template>
    <div>
        <view-info :info="info" @getInfo="getInfoChange"></view-info>
    </div>
</template>

<script>
import viewInfo from './viewInfo.vue'
import { reactive, readonly } from 'vue'
export default {
    components: {
        viewInfo
    },
    setup() {
        // 向子组件传入一个reactive对象
        const info = reactive({
            name: "liclo",
            age: 18,
            height: "1.69"
        })
        const getInfoChange = (payload => {
            info.name = payload
        })
        // 使用readOnly包裹info
        const roInfo = readonly(info)
        // Set operation on key "name" failed: target is readonly.
        // const getInfoChange = (payload => {
        //     roInfo.name = payload
        // })

        return {
            info,
            getInfoChange,
            roInfo
        }
    }
}
</script>

<style scoped>
</style>