import React, { useEffect, useState } from "react";
import style from './allbooks.module.css'
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from "../../hook";
import { deleteBook, EditBooks, fetchBooks } from "../../store/BooksSlice";
import bookImg from './../../images/book.jpg'

export const AllBooks = () => {
  const {isAuth} = useAppSelector(state => state.login)
  const bookList = useAppSelector(state => state.books.list)
  const [count, setCount] = useState(0);

  const dispatch = useAppDispatch()

  useEffect(() =>{
    if(isAuth){
      dispatch(fetchBooks())
    }
  },[dispatch])


  // useEffect(() =>{
  //   dispatch(EditBooks())
  // },[count])


  const handleClick = (event: any) => {
    if(count<2){
      setCount(count + 1);
    }
  };

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
                      {i.status == '0'? <h2>News</h2>:<></>}
                      {i.status == '1'? <h2>Reading</h2>:<></>}
                      {i.status == '2'? <h2>Finished</h2>:<></>}
                      <button onClick={handleClick}>Change Status</button>
                  <button className={style.delete} onClick={() => dispatch(deleteBook(i.book.id))}>Delete</button>
                </div>
              </div>
            </div>)}
        </div>
      </>
  )
}