import { createSlice } from "@reduxjs/toolkit";
import { loginThunk,registerThunk ,logoutThunk, profileThunk, updateUserThunk} from "../services/auth-thunks";

const authSlice = createSlice({
    name: "auth",
    initialState: {user:[], newUser:[], error:null, loading:false, currentUser: null},
    reducers:{},
    extraReducers:{
        [logoutThunk.fulfilled] : (state,{payload}) => {
            state.currentUser = null;
            state.loading= false;
            state.error=null;
        },
        [profileThunk.fulfilled] : (state,{payload}) => {
            state.currentUser = payload;
            state.loading= false;
            state.error=null;
        },
        [profileThunk.pending]: (state, action) => {
          state.currentUser = null;
        },     
        [loginThunk.fulfilled] : (state,{payload}) => {
            state.currentUser = payload;
            state.user = payload;
            state.loading= false;
            state.error=null;
        },
        [updateUserThunk.fulfilled]: (state, { payload }) => {
          state.currentUser = payload;
        },     
        [registerThunk.fulfilled] : (state,{payload}) => {
            state.currentUser = payload;
            state.newUser = payload;
        }
    }
})
export default authSlice.reducer;