import { ref } from 'vue'

export default function useCounter() {
    // 使得counter具备响应性 使用 模板 ref 包裹
    let counter = ref(100)
    const decrement = () => {
        counter.value--
    }
    const increment = () => {
        counter.value++
    }
    return { counter, increment, decrement }
}