import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name:"user",
    initialState:{
        isloading:false,
        user:null,
        error:null
    },
    reducers:{
        IsFetching:(state)=>{
           state.isloading = true;
           state.user = null;
           state.error = null
        },
        IsSuccessful:(state,action)=>{
            state.isloading = false;
            state.user = action.payload;
            state.error = null
        },
        IsFailed:(state,  action)=>{
            state.isloading = false;
            state.user = null;
            state.error = action.payload
        }

    }
})

export default userslice.reducer
export const {IsFailed, IsFetching, IsSuccessful} = userslice.actions