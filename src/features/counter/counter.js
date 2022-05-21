import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

export const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increament:(state)=>{
           state.count +=1
        },
        decrement :(state)=>{
            state.count -=1
        },
        reset :(state)=>{
            state.count = 0
        },
        increamentByAmount:(state, { payload } )=>{
            state.count += payload // built in action,action.type
        }
    }
})
//Welocme 
export const  {increament , decrement ,reset, increamentByAmount } = counterSlice.actions
export default counterSlice.reducer 