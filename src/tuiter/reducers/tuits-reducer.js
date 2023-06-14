import { createSlice } from "@reduxjs/toolkit";
import { findTuitsThunk, deleteTuitThunk, createTuitThunk } from "../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false
<<<<<<< HEAD
}
   
=======
}   
>>>>>>> d383d0934a9b6e8707d177fb23cbfe5ac047245c
const tuitsSlice = createSlice({
 name: 'tuits',
 initialState,
 extraReducers: {
   [findTuitsThunk.pending]:
      (state) => {
         state.loading = true
         state.tuits = [] },
   [findTuitsThunk.fulfilled]:
      (state, { payload }) => {
         state.loading = false
         state.tuits = payload },
   [findTuitsThunk.rejected]:
      (state, action) => {
         state.loading = false
         state.error = action.error
   }, 
   [deleteTuitThunk.fulfilled] :
   (state, { payload }) => {
   state.loading = false
   state.tuits = state.tuits.filter(t => t._id !== payload)
  },
  [createTuitThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    state.tuits.push(payload)
},
 },
 reducers: { }
 
});
export const {createTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;