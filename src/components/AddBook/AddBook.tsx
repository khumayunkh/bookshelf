import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hook";
import { addNewBooks } from "../../store/BooksSlice";
import style from './addbook.module.css'

export const AddBook = () => {
    const dispatch = useAppDispatch()
    const [isbn, setIsbn] = useState<string>('961439574164')
    const [author,setAuthor] = useState<string>('meedsa')
    const {register, handleSubmit} = useForm()

    
    const isbnRegister = register('isbn')
    
    const onSubmit = async(data: any) => {
        dispatch(addNewBooks({author,isbn}))
    }
    
    return(
        <>
        <div className={style.container}>
            <div className={style.add}>
                <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                    <input {...isbnRegister} type='text'/>
                    <button className={style.btn}>Add New Book</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default AddBook