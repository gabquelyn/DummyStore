import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        item: {},
        visible: false
    },
    reducers: {
        toggleModal(state){
            state.visible = !state.visible;
        },
        setModalContent(state, action){
            state.item = action.payload;
        }
    }
})


export const modalSliceActions = modalSlice.actions;
export default modalSlice;