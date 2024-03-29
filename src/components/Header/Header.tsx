import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import style from './header.module.css'
import { useAppDispatch, useAppSelector } from '../../hook';
import { logout } from '../../api/SignUp';
import { setIsAuthAction } from '../../store/SignUp';
import { NavLink } from 'react-router-dom';
import { Add } from '@mui/icons-material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


function Header() {
  const {auth} = useAppSelector(state => state.login)
  const {isAuth} = useAppSelector(state => state.login)
  const dispatch = useAppDispatch()

  const logOut = () => {
    logout().then(()=>{
        dispatch(setIsAuthAction(false))
    })
  }

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ flexGrow: 1, background: '#9c27b0' }}>
        <Toolbar>
          {isAuth == true ? 
          <button onClick={() => logOut()} className={style.btn}>LogOut</button>
          :
          <NavLink to='/signup' className={style.btn}>Sign Up</NavLink>
          }
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <NavLink className={style.nav} to='/'>Bookshelf</NavLink>
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <NavLink className={style.nav} to='/addbook'><Add/></NavLink>
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}

export default Header;