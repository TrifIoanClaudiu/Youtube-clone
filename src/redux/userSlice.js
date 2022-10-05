import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUser: null,
    loading: false,
    error: false,
}

export const userSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSucces: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
       return initialState;
    }
  },
});

export const {loginStart, loginSucces, loginFailure, logout } = userSlice.actions;

export default userSlice;