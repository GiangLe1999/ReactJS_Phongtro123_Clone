import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: true,
  token: 123213,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    increment: (state, action) => {},
  },
});

export const { increment } = authSlice.actions;

export default authSlice.reducer;
