import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
const crypto = require('create-hash')


export const client = axios.create({
    baseURL: 'https://no23.lavina.tech/',
    timeout: 10000,
    headers: {
        'Key': `${localStorage.getItem('key')}`
    }
});


const setConfiguration = (client: AxiosInstance) => {
    client.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            if(config.headers){
                debugger
                let method : any = config.method
                let url = config.url
                let data = config.data
                let secret = localStorage.getItem('secret')
                const signStr = method + url + JSON.stringify(data) + secret
                const md5 = crypto.createHash('md5')
                const sign = md5.update(signStr).digest('hex')
                config.headers['Sign'] = `${sign}`
            }
            return config
        },  
        error => Promise.reject(error)
    )
}

setConfiguration(client)