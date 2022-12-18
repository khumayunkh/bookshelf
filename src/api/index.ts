import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
// const crypto = require('create-hash')
import CryptoJS from 'crypto-js';

const hash = CryptoJS.MD5('my message').toString();

console.log(hash); // '78e731027d8fd50ed642340b7c9a63b3'


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
                let method : any = config.method?.toUpperCase()
                let url = 'https://no23.lavina.tech/' + config.url
                let data = config.data
                let secret = localStorage.getItem('secret')
                let signStr = method + url + JSON.stringify(data) + secret
                // signStr = signStr.replaceAll(/\\/, '')
                const hash = CryptoJS.MD5(signStr).toString();
                config.headers['Sign'] = `${hash}`
            }
            return config
        },  
        error => Promise.reject(error)
    )
}

setConfiguration(client)