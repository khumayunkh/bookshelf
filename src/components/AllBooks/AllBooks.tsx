import React, { useEffect } from "react";
import {books} from './../array'
import style from './allbooks.module.css'
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from "../../hook";
import { fetchBooks } from "../../store/BooksSlice";

export default function AllBooks(){
  const {isAuth} = useAppSelector(state => state.login)
  const book = useAppSelector(state => state.books.list)
  console.log(book)
  const dispatch = useAppDispatch()

  useEffect(() =>{
    if(isAuth){
      dispatch(fetchBooks())
    }
  },[dispatch])

  return(
      <>
      <div className={style.container}>
          {books.map((item, index)=>
            <div key={index} className={style.book}>
              {item.cover}
              <div className={style.title}>
                <div className={style.title_in}>
                  <h3>{item.title}, {item.published}</h3>
                  <h4>By {item.author}</h4>
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
                  <DeleteIcon/>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
  )
}