import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch, RootState } from '.';
import { register } from '../api/SignUp';

type Auth = {
  id: string;
  name: string;
  email: string;
  key : string;
  secret : string
}

type AuthState = {
  auth: Auth[];
  loading: boolean;
  error: string
}

const initialState: AuthState = {
  auth: [],
  loading : false,
  error: ''
}

export const signInThunk = createAsyncThunk<void, { name: string, email: string, key: string, secret: string }, {state: RootState, dispatch: AppDispatch}>(
  'signIn',
  async ({name, email, key, secret}, {dispatch, getState}) => {
      dispatch(setIsLoadingAction(true))
      try {
          const res = await register(name,email,key,secret)
          const data = res.data
          localStorage.setItem('key', res.data.data.key)
          localStorage.setItem('secret', res.data.data.secret)
          console.log(data)
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
  },
  extraReducers: (builder) => {
    builder.addCase(signInThunk.pending, (state) => {
    })
    builder.addCase(signInThunk.rejected, (state, action: PayloadAction<any>) => {
      state.auth = action.payload
    })
    builder.addCase(signInThunk.fulfilled, (state) => {
    })
  }
});

export const {setIsLoadingAction, setErrorMessageAction} = signUp.actions;

export default signUp.reducer;