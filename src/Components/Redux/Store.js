import { configureStore } from "@reduxjs/toolkit";
import countslice from './Countslice'

export default configureStore({
    reducer:{
       countslice
    }
})