import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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
}

const initialState: AuthState = {
  auth: [],
}

// export const signInThunk = createAsyncThunk<void, { email: string, password: string }, {state: RootState, dispatch: AppDispatch}>(
//   'signIn',
//   async (data, {dispatch, getState}) => {
//       dispatch(setIsLoadingAction(true))
//       try {
//           await register(data)
//           dispatch(setLoginSuccessful(true))
//       } catch (error) {
//           if (axios.isAxiosError(error)){
//               if(error.response) dispatch(setErrorMessageAction(error.response.data.detail))
//               else dispatch(setErrorMessageAction(error.message))
//           }
//       } finally {
//           dispatch(setIsLoadingAction(false))
//       }

//   }
// )


const signUp = createSlice({
  name: 'SignUp',
  initialState,
  reducers: {
  },
});

export const {} = signUp.actions;

export default signUp.reducer;