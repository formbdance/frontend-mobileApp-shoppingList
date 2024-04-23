
import { createSlice } from '@reduxjs/toolkit';



export const modalSlice = createSlice({
  name: 'modalStatus',
  initialState: {
    modalStatus: false,
  }, 
  reducers: {
    elevateModal: (state) => {
      state.modalStatus = !state.modalStatus;
    },
  },
});

export const { elevateModal } = modalSlice.actions;

export default modalSlice.reducer;