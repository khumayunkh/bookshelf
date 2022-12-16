import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, IconButton, Input, InputAdornment, InputLabel, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Container } from "@mui/system";
import background from './../../images/background.png'


export default function SignUp(){
    
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    };

    const styles = {
        container: {
            backgroundImage: `url(${background})`,
            backgroundSize: '25rem',
            backgroundPosition: 'left bottom',
            backgroundRepeat : 'no-repeat'
        },
        text:{
            background: "-webkit-linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
        }
    }

    return(
        <>
        <Container style={styles.container} sx={{display: 'flex', justifyContent: 'center', gap:'1.5rem', alignItems: 'center', height: '45rem'}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap:'1.5rem', alignItems: 'center',}}>
            <Typography
                sx={{fontWeight: 'bold'}}
                style={styles.text}
                variant="h5" 
                component="h2">
              Sign Up to BookShelf
            </Typography>
            <TextField
                sx={{ m: 1, width: '35ch' }}
                id="standard-multiline-flexible"
                label="Name"
                multiline
                maxRows={4}
                variant="standard"
            />
            <TextField
                sx={{ m: 1, width: '35ch' }}
                id="standard-multiline-flexible"
                label="Email"
                multiline
                maxRows={4}
                variant="standard"
            />
            <TextField
                sx={{ m: 1, width: '35ch' }}
                id="standard-multiline-flexible"
                label="Key"
                multiline
                maxRows={4}
                variant="standard"
            />
            <FormControl sx={{ m: 1, width: '35ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Secret</InputLabel>
                <Input
                  id="standard-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
            </FormControl>
        </Box>
        </Container>
        </>
    )
}
