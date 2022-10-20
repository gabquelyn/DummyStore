import { createSlice } from "@reduxjs/toolkit";

const highlightSlice = createSlice({
    name: 'highlight',
    initialState: {
        Home: true,
        Shop: false,
        Cart: false,
        WishList: false,
        AboutUs: false
    },
    reducers: {
        highlight(state, action){
            const ids = Object.keys(state)
            for(const id of ids){
                state[id] = false;
            }
            state[action.payload.page] = true;
        }
    }
})
export const highlightActions = highlightSlice.actions;
export default highlightSlice;