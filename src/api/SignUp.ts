import axios from 'axios'
import { client } from './index'


export const register = async (name: string, email : string, key: string, secret: string) => {
    return await client.post('signup/', {
        name : name,
        email : email,
        key : key,
        secret : secret
    })
}


export const getMe = async()=>{
    return await client.get('/myself')
}