import axios from "axios";


export const client = axios.create({
    baseURL: 'http://localhost:3006/',
    timeout: 10000,
    headers: {
        'Key': `${localStorage.getItem('key')}`,
        'Sign': `${localStorage.getItem('sign')}`
    }
});


const setConfiguration = (client: any) => {
    client.interceptors.request.use(
        (config : any) => {
            config.headers && (config.headers['Key'] = `${localStorage.getItem('key')}`) && (config.headers['Sign'] = `${localStorage.getItem('sign')}`)
            return config
        }, 
    )
}

setConfiguration(client)