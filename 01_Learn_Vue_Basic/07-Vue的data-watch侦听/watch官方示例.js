const app = Vue.createApp({
    data() {
        return {
            a: 1,
            b: 2,
            c: {
                d: 4
            },
            e: 5,
            f: 6
        }
    },
    methods: {
        someMethod() {
            console.log('b changed');
        },
        handle1() {
            console.log('handle 1 triggered');
        }
    },
    watch: {
        // 1. 侦听顶级property
        a(val, oldVal) {
            console.log(`new: ${val}, old: ${oldVal}`);
        },

        // 2.字符串方法名
        b: 'someMethod',

        // 3.该回调会在任何被侦听的对象的property改变时被调用，不论其被嵌套多深(深度)
        c: {
            handler(val, oldVal) {
                console.log('c changed');
            },
            deep: true
        },

        // 4. 侦听单个嵌套 property
        'c.d' : function(val, oldVal){
            // do something
        },

        // 5. 该回调会在侦听开始之后被立刻调用
        e: {
            handler(val, oldVal) {
                console.log('e changed')
            },
            immediate: true
        },

        // 可以传入回调数组，它们会被逐一调用
        f: [
            'handle1',
            function handle2(val, oldVal) {
            console.log('handle2 triggered');
            },
            {
                handler: function handle3(val, oldVal) {
                    console.log('handle3 triggered');
                }
                /* ... */
            }
        ]
    },
})

const vm = app.mount('#app')

vm.a = 3 // => new:3, old: 1