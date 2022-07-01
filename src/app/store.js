import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slice/counter/counterSlice';
import modalReducer from '../slice/modal/ModalSlice';

//Reducer설정
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer
  },
});
