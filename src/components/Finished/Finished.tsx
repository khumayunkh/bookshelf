import React from "react";
import {books} from './../array'
import style from './finished.module.css'
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Finished(){
    return(
        <>
        <div className={style.container}>
            {books.map((item, index)=>item.status == '3'?
              <div className={style.book}>
                {item.cover}
                <div className={style.title}>
                  <div className={style.title_in}>
                    <h3>{item.title}, {item.published}</h3>
                    <h4>By {item.author}</h4>
                  </div>
                  <div className={style.btn}> 
                    <Button variant="contained">
                        Status: Finished
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