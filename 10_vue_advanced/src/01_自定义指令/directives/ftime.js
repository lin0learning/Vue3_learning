import dayjs from "dayjs"
export default function directiveFtime(app) {
    app.directive("ftime", {
        mounted(el, bindings) {
            let timestamp = el.textContent
            if (timestamp.length === 10 ) {
                timestamp *= 1000
            }
            timestamp = Number(timestamp)

            let value = bindings.value
            if (!value) {
                value = "YYYY-MM-DD HH:mm:ss"
            }
            const formatTime = dayjs(timestamp).format(value)
            el.textContent = formatTime
        }
    })
}