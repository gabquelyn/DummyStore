import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalAmount: 0
    },
    reducers: {
            addItemToCart(state, action){
                const newItem = action.payload;
                const existingItem = state.items.find((item) => item.id === newItem.id);
                state.totalQuantity++;
                state.totalAmount += newItem.price
                if(!existingItem){
                    state.items.push({ 
                        id: newItem.id, 
                        price: newItem.price,  
                        quantity: 1, 
                        name: newItem.name,
                        image: newItem.image
                    });
                }else{
                    existingItem.quantity++
                }
            },
            removeItemFromCart(state, action){
                const id = action.payload;
                const existingItem = state.items.find(item => item.id === id);
                state.totalQuantity--;
                state.totalAmount -= existingItem.price;
                if(existingItem.quantity === 1){
                    state.items = state.items.filter(item => item.id !== id);
                }else{
                    existingItem.quantity--;
                }
            },
            clearItemFromCart(state, action){
                const id = action.payload;
                const existingItem = state.items.find(item => item.id === id);
                state.items = state.items.filter(item => item.id !== id);
                state.totalAmount = state.totalAmount - existingItem.price * existingItem.quantity;
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }
        }
})

export const cartSliceActions = cartSlice.actions
export default cartSlice;