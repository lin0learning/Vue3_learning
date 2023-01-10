<script>
import { h } from 'vue'
import home from './Home.vue'

export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
            this.counter++
        },
        decrement() {
            this.counter--
        }
    },
    render() {
        return h("div", {className: "appRender"},[
            h("div", `当前计数: ${this.counter}`),
            h("button", { onClick: this.increment }, "+1"),
            h("button", { onClick: this.decrement }, "-1"),
            h(home)
        ])
    }
}
</script>

<style>

</style>