import { createSlice } from '@reduxjs/toolkit';
export const modalSlice = createSlice({
  //Slice 이름 state.login.value => login value 호출 modal (useSelector)
  name: 'modal',
  initialState: {value:{MessageModal:false , SignUpModal:false , FindModel:false}},
  reducers: {
    //호출
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
    
  },
});
//dispatch(IdCheckModel({파람 ex) modal:true}));
export const {  MessageModal , SignUpModal , SignUpMessageModal , FindModel} = modalSlice.actions;
export default modalSlice.reducer;
