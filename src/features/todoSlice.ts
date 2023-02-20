import { createSlice } from "@reduxjs/toolkit";
import {ITodoState} from "interfaces";

const initialState: ITodoState = {
    data: null
}

const todoSlice = createSlice({
    name: 'todo/slice',
    initialState,
    reducers: {

    }
});

export default todoSlice.reducer;