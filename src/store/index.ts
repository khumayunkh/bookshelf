import { configureStore } from '@reduxjs/toolkit';
import BooksSlice from './BooksSlice';
import signUp from './SignUp';


const store = configureStore({
  reducer: {
    login: signUp,
    books: BooksSlice
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;