import { configureStore } from '@reduxjs/toolkit';
import signUp from './SignUp';


const store = configureStore({
  reducer: {
    login: signUp,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;