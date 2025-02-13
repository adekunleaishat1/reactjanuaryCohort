import { createSlice } from "@reduxjs/toolkit";


const countslice = createSlice({
   name:"count",
   initialState:{
    count:0
   } ,
   reducers:{
        increament:(state)=>{
           state.count += 1  
        }
   }
})


export default countslice.reducer
export const {increament} = countslice.actions