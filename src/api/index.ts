import axios from "axios";


export const client = axios.create({
    baseURL: 'https://splunk.backpackertrail.de/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    }
});


const setConfiguration = (client) => {
    client.interceptors.request.use(
        (config) => {
            config.headers && (config.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`)
            return config
        },  
        error => Promise.reject(error)
    )
}

setConfiguration(client)