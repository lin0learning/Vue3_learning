<script lang="jsx">
import About from './About.vue'
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
        return (
            <div class="calcu">
                <div>{this.counter}</div>
                <button onClick={ this.decrement }>-1</button>
                <button onClick={ this.increment }>+1</button>
                <About/>
            </div>
            
        )
    }
}
</script>

<style></style>