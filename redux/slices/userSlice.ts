import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: "",
    password: "",
    uid: ""
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser: (state, action) => {
      state.email = action.payload.email,
      state.password = action.payload.password,
      state.uid = action.payload.uid
    },
    signOutUser: (state) => {
      state.email = "",
      state.password = "",
      state.uid = ""
    }
  }
})


export const { 
  signInUser, signOutUser
 } = userSlice.actions;


export default userSlice.reducer;