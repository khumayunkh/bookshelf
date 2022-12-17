import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
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

export type NewUser = {
  name : string;
  email : string;
  key : string;
  secret : string
}


const userData: NewUser = {
  name : 'Humoyun',
  email : 'khumayunkh',
  key: 'qwerty',
  secret : 'qwerty'
}

// export const authAsyncThunk = createAsyncThunk<
//   NewUser>(
//   "register/authAsyncThunk",
//   async (userData) => {
//     const res = await register<NewUser>({userData});
//     return res.data;
//   }
// );


const signUp = createSlice({
  name: 'SignUp',
  initialState,
  reducers: {
  },
});

export const {} = signUp.actions;

export default signUp.reducer;