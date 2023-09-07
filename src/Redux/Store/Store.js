import { configureStore } from "@reduxjs/toolkit";
import RegistrationReducer from '../Post/PostSlice'

const store =configureStore({
    reducer:{
        data:RegistrationReducer
    }
})

export default store;