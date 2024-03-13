import {createSlice} from '@reduxjs/toolkit'

const initialState=[];
const cartSlice=createSlice({

    name:'cart',
    initialState,
    reducers:{
        add(state,action){
            const newItem = {
                ...action.payload,
                quantity: 1,  
            };
            state.push(newItem);
        },
        remove(state,action){
            return state.filter(item=>item.id!==action.payload)
        },
        updateQuantity(state, action) {
            const index = state.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state[index].quantity = action.payload.quantity;
            }
        },
    }
})
export const {add,remove,updateQuantity}=cartSlice.actions
export default cartSlice.reducer