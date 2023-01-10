// 封装axios请求
import axios from 'axios'

class Lic {
    constructor(baseURL, timeout=6000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }

    requeset(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    get(config) {
        return this.requeset({...config, method: "get"})
    }
    post(config) {
        return this.requeset({...config, method: "post"})
    }
}

export default new Lic("http://123.207.32.32:9001")