import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        lists: []
    },
    reducers: {
        addToWishList(state, action){
            const wishlistItem = action.payload;
            state.lists = state.lists.concat(wishlistItem)
        },
        removefromWishList(state, action){
            state.lists = state.lists.filter(item => item.id !== action.payload)
        }
    }
})

export const wishlistActions = wishlistSlice.actions
export default wishlistSlice;