import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './slices/modalSlice';
import cardSlice from './slices/cardSlice';

export const store = configureStore({
  reducer: {
    modalStatus: modalSlice,
    cardsStatus: cardSlice,
  },
});