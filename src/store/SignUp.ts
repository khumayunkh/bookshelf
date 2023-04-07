import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch, RootState } from '.';
import { register } from '../api/SignUp';

type Auth = {
  data:{
    id: string;
    name: string;
    email: string;
    key : string;
    secret : string
  }
}

type AuthState = {
  auth: Object;
  loading: boolean;
  error: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  auth: {},
  loading : false,
  error: '',
  isAuth : false
}

export const signInThunk = createAsyncThunk<void, { name: string, email: string, key: string, secret: string }, {state: RootState, dispatch: AppDispatch}>(
  'signIn',
  async ({name, email, key, secret}, {dispatch, getState}) => {
      dispatch(setIsLoadingAction(true))
      try {
          const res = await register(name,email,key,secret)
          const data = res.data.data
          dispatch(setIsAuthAction(true))
          localStorage.setItem('key', res.data.data.key)
          localStorage.setItem('secret', res.data.data.secret)
          return data
      } 
      catch (error) {
          if (axios.isAxiosError(error)){
              if(error.response) dispatch(setErrorMessageAction(error.response.data.detail))
              else dispatch(setErrorMessageAction(error.message))
          }
      } finally {
          dispatch(setIsLoadingAction(false))
      }
  }
)


const signUp = createSlice({
  name: 'SignUp',
  initialState,
  reducers: {
    setIsLoadingAction: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setErrorMessageAction: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    setIsAuthAction: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInThunk.pending, (state) => {
    })
    builder.addCase(signInThunk.rejected, (state) => {
      
    })
    builder.addCase(signInThunk.fulfilled, (state,action: PayloadAction<any>) => {
      state.auth = action.payload
      console.log(state.auth)
    })
  }
});

export const {setIsLoadingAction, setErrorMessageAction,setIsAuthAction} = signUp.actions;

export default signUp.reducer;