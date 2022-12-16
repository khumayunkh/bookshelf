import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {books} from './../array'

export default function AllBooks(){
    return(
        <>
        <Box sx={{ flexGrow: 1,}}>
          <Grid container spacing={2}>
            {books.map((item, index)=>
            <Grid key={index} sx={{ width: '100%', height: '12rem', border: '1px red solid', justifyContent: 'start', display: 'flex'}} item xs={12}>
              {item.title}
            </Grid>
            )}
          </Grid>
        </Box>
        </>
    )
}