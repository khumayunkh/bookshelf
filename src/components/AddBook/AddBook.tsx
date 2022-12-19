import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hook";
import { addNewBooks } from "../../store/BooksSlice";
import style from './addbook.module.css'

export const AddBook = () => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit} = useForm()
    
    const isbnRegister = register('isbn')
    const authorRegister = register('author')
    const titleRegister = register('title')
    const dateRegister = register('date')
    const pageRegister = register('page')
    
    const onSubmit = async(data: any) => {
        dispatch(addNewBooks({
            author: data.author,
            isbn: data.isbn
        }))
    }
    
    return(
        <>
        <div className={style.container}>
            <div className={style.add}>
                <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                    sx={{ m: 1, width: '35ch' }}
                    id="standard-multiline-flexible"
                    label="Author of book"
                    {...authorRegister}
                    multiline
                    maxRows={4}
                    variant="standard"
                    />
                    <TextField
                    sx={{ m: 1, width: '35ch' }}
                    id="standard-multiline-flexible"
                    label="Title of book"
                    {...titleRegister}
                    multiline
                    maxRows={4}
                    variant="standard"
                    />
                    <TextField
                    sx={{ m: 1, width: '35ch' }}
                    id="standard-multiline-flexible"
                    label="Date of publish"
                    {...dateRegister}
                    multiline
                    maxRows={4}
                    variant="standard"
                    />
                    <TextField
                    sx={{ m: 1, width: '35ch' }}
                    id="standard-multiline-flexible"
                    label="Pages"
                    {...pageRegister}
                    multiline
                    maxRows={4}
                    variant="standard"
                    />
                    <TextField
                        sx={{ m: 1, width: '35ch' }}
                        id="standard-multiline-flexible"
                        label="Isbn of book"
                        {...isbnRegister}
                        multiline
                        maxRows={4}
                        variant="standard"
                    />
                    <button className={style.btn}>Add New Book</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default AddBook