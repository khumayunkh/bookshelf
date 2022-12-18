import axios from 'axios'


export const getAllBooks = async()=>{
    return await axios.get('/books')
}

export const deleteABook = async(id: number)=>{
    return await axios.delete(`/books/:${id}`)
}

export const EditABook = async(id: number, status : number)=>{
    return await axios.patch(`/books/:${id}`, {
        status : status
    })
}