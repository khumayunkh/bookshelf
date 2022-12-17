import React from "react";
import {books} from './../array'
import style from './news.module.css'
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function News(){
    return(
        <>
        <div className={style.container}>
            {books.map((item, index)=>item.status == 1?
              <div className={style.book}>
                {item.cover}
                <div className={style.title}>
                  <div className={style.title_in}>
                    <h3>{item.title}, {item.published}</h3>
                    <h4>By {item.author}</h4>
                  </div>
                  <div className={style.btn}> 
                    <Button variant="contained" color="secondary">
                        Status: New
                    </Button>
                    <DeleteIcon/>
                  </div>
                </div>
              </div>:<></>
            )}
          </div>
        </>
    )
}