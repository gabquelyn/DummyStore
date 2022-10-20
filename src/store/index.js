import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme-slice";
import pageSlice from "./page-slice";
import highlightSlice from "./highlight-slice";
import cartSlice from "./cart-slice";
import wishlistSlice from "./wishlist-slice";
import modalSlice from "./modal-slice";
const store = configureStore({
    reducer: {
        theme: themeSlice.reducer, 
        page: pageSlice.reducer, 
        highlight: highlightSlice.reducer, 
        cart: cartSlice.reducer,
        wishlist: wishlistSlice.reducer,
        modal: modalSlice.reducer
    }
})

export default store;