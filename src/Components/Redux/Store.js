import { configureStore } from "@reduxjs/toolkit";
import countslice from './Countslice'
import userslice from "./Userslice"

export default configureStore({
    reducer:{
       countslice,
       userslice
    }
})