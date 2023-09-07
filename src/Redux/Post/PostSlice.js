import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let reg_api='http://localhost:1000/bio'


export const fetchData = createAsyncThunk('data/fetchData',
async(data)=>{
    const res =await axios.post(reg_api,data)
    return res?.data
})

let login_api='http://localhost:1000/bio'

export const loginData = createAsyncThunk('data/loginData',
async()=>{
    const res = await axios.get(login_api)
    return res?.data
}
)


let initial_value={
    isLoading : false,
    status:0,
    fName:"",
    lName:"",
    email:"",
    password:"",
    message:"",
    errMsg:"",
    authToken:"",
    total:[]
}


export const postSlice = createSlice({
    name:"data",
    initialState:initial_value,

    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            // console.log(action)
            state.isLoading=false;
            state.status=action.payload.status;
            state.fName=action.payload.fName;
            state.lName=action.payload.lName;
            state.email=action.payload.email;
        })
        builder.addCase(fetchData.rejected,(state,action)=>{
            console.log(action);
            state.isLoading=false;
            state.errMsg=action.error.message
        })
        builder.addCase(loginData.pending,(state,action)=>{
            state.isLoading=true;
        })
        builder.addCase(loginData.fulfilled,(state,action)=>{
            console.log("login action",action);
            state.isLoading=false;
            state.total = action.payload
            state.fName= action.payload.fName
            state.lName= action.payload.lName
            
        })
    }
})
export default postSlice.reducer    