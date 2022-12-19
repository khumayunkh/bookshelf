import axios from 'axios'
import { client } from './index'


export const getAllBooks = async()=>{
    return await client.get('books')
}

export const deleteABook = async(id: number)=>{
    return await client.delete(`books/:${id}`)
}

export const AddBooks = async(isbn: string)=>{
    return await client.post('books',{
        isbn : isbn
    })
}

export const EditABook = async(id: number, status : number)=>{
    return await client.patch(`books/:${id}`, {
        status : status
    })
}