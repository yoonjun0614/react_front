import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { count } from './counterAPI';
const initialState = {
  value: 0,
  status: 'idle',
};
export const incrementAsync = createAsyncThunk(
  'counter/Count',
  async (amount) => {
    const response = await count(amount);
    return response.data;
  }
);
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    deleteByAmount:(state, action)=>{
      state.value -= action.payload;
    }
  },
});
export const {  deleteByAmount , incrementByAmount } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;
