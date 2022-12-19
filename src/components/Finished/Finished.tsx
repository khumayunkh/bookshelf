import React from "react";
import {books} from './../array'
import style from './finished.module.css'
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import bookImg from './../../images/book.jpg'
import { useAppSelector } from "../../hook";

export default function Finished(){
  const bookList = useAppSelector(state => state.books.list)
  
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
                  <DeleteIcon/>
                </div>
              </div>
            </div>)}
        </div>
      </>
    )
}