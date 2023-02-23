import { createSlice } from "@reduxjs/toolkit";
import {ITodoState} from "interfaces";
import {Names} from "enums";

const initialState: ITodoState = {
    data: null,
    btnState: Names.all
}

const todoSlice = createSlice({
    name: 'todo/slice',
    initialState,
    reducers: {
        setFirstRender: (state, action) => {
            state.data = action.payload.data;
            state.btnState = action.payload.buttonState;
        },

        setButtonState: (state, action) => {
            state.btnState = action.payload;
        },

        setTask: (state, action) => {
            state.data = action.payload;
        },
    }
});

export const { setTask, setFirstRender, setButtonState } = todoSlice.actions;
export default todoSlice.reducer;