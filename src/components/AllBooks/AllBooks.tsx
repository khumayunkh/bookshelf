import React from "react";
import {books} from './../array'
import style from './allbooks.module.css'
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { NavLink } from "react-router-dom";
import Reading from "../Reading/Reading";
import Finished from "../Finished/Finished";

export default function AllBooks(){
    return(
        <>
        <div className={style.container}>
            {books.map((item, index)=>
              <div className={style.book}>
                {item.cover}
                <div className={style.title}>
                  <div className={style.title_in}>
                    <h3>{item.title}, {item.published}</h3>
                    <h4>By {item.author}</h4>
                  </div>
                  <div className={style.btn}>
                    {item.status == '1'? 
                    <Button variant="contained" color="secondary">
                        Status: New
                    </Button>:<></>
                    }
                    {item.status == '2'? 
                    <Button variant="contained" color="success">
                        <Reading/>
                    </Button>:<></>
                    }
                    {item.status == '3'? 
                    <Button variant="contained">
                        <Finished/>
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