import { createSlice } from "@reduxjs/toolkit";
import {ITodoState} from "interfaces";

const initialState: ITodoState = {
    data: null
}

const todoSlice = createSlice({
    name: 'todo/slice',
    initialState,
    reducers: {
        setTask: (state, action) => {
            state.data = action.payload;
        },

        setNewTask: (state, action) => {
            state.data = action.payload
        }
    }
});

export const { setTask, setNewTask } = todoSlice.actions;
export default todoSlice.reducer;