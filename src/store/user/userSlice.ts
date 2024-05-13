import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserSlice {
  email: string;
  password: string;
  name: string;
  isLoggedIn: boolean;
}

const initialState: UserSlice = {
  email: sessionStorage.getItem('email') || '',
  password: sessionStorage.getItem('password') || '',
  name: '',
  isLoggedIn: !!(
    sessionStorage.getItem('password') && sessionStorage.getItem('email')
  ),
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    emailFill: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    passwordFill: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    nameFill: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { emailFill, passwordFill, nameFill, setLoggedIn } =
  userSlice.actions;

export default userSlice.reducer;
