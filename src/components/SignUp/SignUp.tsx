import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import background from './../../images/background.png'
import Button from '@mui/material/Button';
import { useAppDispatch } from "../../hook";
import { signInThunk } from "../../store/SignUp";
import { useForm } from "react-hook-form";
import style from './signup.module.css'
import { useNavigate } from "react-router-dom";

export default function SignUp(){
    const {register, handleSubmit} = useForm()
    const navigate = useNavigate()

    const nameRegister = register("name")
    const emailRegister = register("email")
    const keyRegister = register("key")
    const secretRegister = register("secret")

    const dispatch = useAppDispatch()

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    };

    const onSubmit = async(data: any) => {
        dispatch(signInThunk({
            name : data.name,
            email : data.email,
            key : data.key,
            secret: data.secret
        }))
        navigate('/')
    }

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
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
                sx={{ m: 1, width: '35ch' }}
                id="standard-multiline-flexible"
                label="Name"
                {...nameRegister}
                multiline
                maxRows={4}
                variant="standard"
            />
            <TextField
                sx={{ m: 1, width: '35ch' }}
                id="standard-multiline-flexible"
                label="Email"
                {...emailRegister}
                multiline
                maxRows={4}
                variant="standard"
            />
            <TextField
                sx={{ m: 1, width: '35ch' }}
                id="standard-multiline-flexible"
                label="Key"
                {...keyRegister}
                multiline
                maxRows={4}
                variant="standard"
            />
            <TextField
                sx={{ m: 1, width: '35ch' }}
                id="standard-multiline-flexible"
                label="Secret"
                {...secretRegister}
                multiline
                maxRows={4}
                variant="standard"
            />
             <button className={style.btn}>Sign Up</button>
             </form>
        </Box>
        </Container>
        </>
    )
}
