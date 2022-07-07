import { createSlice } from '@reduxjs/toolkit';
export const modalSlice = createSlice({
  name: 'modal',
  initialState: {value:{MessageModal:false , SignUpModal:false , SignUpMessageModal:false , FindModel:false , FindMessageModal:false , FindPasswordMessageModal:false}},
  reducers: {
    MessageModal: (state, action) => {
      state.value.MessageModal = action.payload;
    },
    SignUpModal: (state, action) => {
      state.value.SignUpModal = action.payload;
    },
    SignUpMessageModal: (state, action) => {
      state.value.SignUpMessageModal = action.payload;
    },
    FindModel: (state, action) => {
      state.value.FindModel = action.payload;
    },
    FindMessageModal: (state, action) => {
      state.value.FindMessageModal = action.payload;
    },
    FindPasswordMessageModal: (state, action) => {
      state.value.FindPasswordMessageModal = action.payload;
    },
  },
});
//dispatch(IdCheckModel({파람 ex) modal:true}));
export const {  MessageModal , SignUpModal , SignUpMessageModal , FindModel , FindMessageModal ,FindPasswordMessageModal} = modalSlice.actions;
export default modalSlice.reducer;
