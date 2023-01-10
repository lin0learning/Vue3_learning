<script>
import { h } from 'vue';

export default {
    render() {
        return h("div", {className: "app" },[
            h("h2", {className: "title"}, "标题"),
            h("p", {className: "content"}, "内容")
        ])
    }
}
</script>

<style scoped>

</style>