import React,{useEffect, useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import background from './../../images/background.png'
import { useAppDispatch } from "../../hook";
import { signInThunk } from "../../store/SignUp";


export default function SignUp(){
    // const [name, setName] = useState<string>('humahq')
    // const [email, setEmail] = useState<string>('humahq@gmail.com')
    // const [key, setKey] = useState<string>('humahq')
    // const [secret, setSecret] = useState<string>('humahq')

    // const dispatch = useAppDispatch()

    // useEffect(() => {
    //     dispatch(signInThunk({
    //         name: name,
    //         email: email,
    //         key : key,
    //         secret : secret
    //     }))
    // },[])

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
            <TextField
                sx={{ m: 1, width: '35ch' }}
                id="standard-multiline-flexible"
                label="Secret"
                multiline
                maxRows={4}
                variant="standard"
            />
        </Box>
        </Container>
        </>
    )
}
