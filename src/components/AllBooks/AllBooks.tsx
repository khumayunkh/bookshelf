import React, { useEffect } from "react";
import style from './allbooks.module.css'
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from "../../hook";
import { deleteBook, fetchBooks } from "../../store/BooksSlice";
import bookImg from './../../images/book.jpg'

export const AllBooks = () => {
  const {isAuth} = useAppSelector(state => state.login)
  const bookList = useAppSelector(state => state.books.list)
  console.log(bookList)
  const dispatch = useAppDispatch()

  useEffect(() =>{
    if(isAuth){
      dispatch(fetchBooks())
    }
  },[dispatch])
  console.log(bookList)

  return(
      <>
      <div className={style.container}>
        {bookList?.data?.map((i) => <div className={style.book}>
              <img src={bookImg}/>
              <div className={style.title}>
                <div className={style.title_in}>
                    isbn:  {i.book.isbn}
                </div>
                <div className={style.btn}>
                      <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">Status</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="New"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel value="New" control={<Radio />} label="New" />
                        <FormControlLabel value="Reading" control={<Radio />} label="Reading" />
                        <FormControlLabel value="Finished" control={<Radio />} label="Finished" />
                      </RadioGroup>
                    </FormControl>
                  <button className={style.delete} onClick={() => dispatch(deleteBook(i.book.id))}>Delete</button>
                </div>
              </div>
            </div>)}
        </div>
      </>
  )
}