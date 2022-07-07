import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../slice/modal/ModalSlice';

//Reducer설정
export const store = configureStore({
  reducer: {
    modal: modalReducer
  },
});
