import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  signUpModalOpen: false,
  logInModalOpen: false,
  forgotModalOpen: false
};


export const modalSlice = createSlice({
  name: 'modal',
  initialState,
 
  reducers: {
    openSignupModal: (state) => {
      state.signUpModalOpen = true
    },
    closeSignupModal: (state) => {
      state.signUpModalOpen = false
    },
    openLoginModal: (state) => {
      state.logInModalOpen = true
    },
    closeLoginModal: (state) => { 
      state.logInModalOpen = false
    },
    openForgotModal: (state) => {
      state.forgotModalOpen = true
    },
    closeForgotModal: (state) => { 
      state.forgotModalOpen = false
    },

  },
});


export const { 
  openSignupModal, 
  closeSignupModal, openLoginModal, 
  closeLoginModal,
  openForgotModal,
  closeForgotModal
 } = modalSlice.actions;


export default modalSlice.reducer;
