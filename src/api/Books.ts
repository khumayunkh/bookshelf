import axios from 'axios'
import { client } from './index'


export const getAllBooks = async()=>{
    return await client.get('books')
}

export const deleteABook = async(id: string)=>{
    return await client.delete(`books/:${id}`)
}

export const AddBooks = async(isbn: string)=>{
    return await client.post('books',{
        isbn : isbn
    })
}

export const EditABook = async(id: string, status : string)=>{
    return await client.patch(`books/:${id}`, {
        status : status
    })
}