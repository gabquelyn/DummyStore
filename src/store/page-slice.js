import { createSlice } from "@reduxjs/toolkit";
const pageSlice = createSlice({
    name: 'pages',
    initialState: {visiblePage: 'Home'},
    reducers: {
        setVisiblePage(state, action){
            state.visiblePage = action.payload.visiblePage
        }
    }
})

export const pageActions = pageSlice.actions
export default pageSlice;
