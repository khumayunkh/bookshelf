import { ResetTv } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../hook";
import { addNewBooks, fetchBooks } from "../../store/BooksSlice";
import style from './addbook.module.css'

export const AddBook = () => {
    const dispatch = useAppDispatch()
    const {register, handleSubmit, reset} = useForm()
    const isbnRegister = register('isbn')
    
    const onSubmit = async(data: any) => {
        dispatch(addNewBooks({
            isbn: data.isbn
        }))
        reset()
    }
    
    function isValidISBN(isbn: any)
    {
           
        // length must be 10
        let n = isbn.length;
        if (n != 10)
            return false;
   
        // Computing weighted sum of
        // first 9 digits
        let sum = 0;
        for (let i = 0; i < 9; i++)
        {
            let digit = isbn[i] - 0;
               
            if (0 > digit || 9 < digit)
                return false;
                   
            sum += (digit * (10 - i));
        }
   
        // Checking last digit.
        let last = isbn[9];
        if (last != 'X' && (last < '0' || last > '9'))
            return false;
   
        // If last digit is 'X', add 10
        // to sum, else add its value.
        sum += ((last == 'X') ? 10 : (last - 0));
   
        // Return true if weighted sum
        // of digits is divisible by 11.
        return (sum % 11 == 0);
    }

    return(
        <>
        <div className={style.container}>
            <div className={style.add}>
                <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...isbnRegister}
                        sx={{ m: 1, width: '35ch' }}
                        id="standard-multiline-flexible"
                        label="Isbn of book"
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