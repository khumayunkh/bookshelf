import React from "react";
import {books} from './../array'
import style from './allbooks.module.css'
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function AllBooks(){
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
                    {item.status == 1 ? 
                    <Button variant="contained" color="secondary">
                        Status: New
                    </Button>:<></>
                    }
                    {item.status == 2 ? 
                    <Button variant="contained" color="success">
                        Status: Reading
                    </Button>:<></>
                    }
                    {item.status == 3 ? 
                    <Button variant="contained">
                        Status: Finished
                    </Button>:<></>
                    }
                    <DeleteIcon/>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
    )
}