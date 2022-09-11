import { createSlice } from "@reduxjs/toolkit";


export const inputSlice = createSlice({
    name: 'input',
    initialState: {
        value: ''
    },
    reducers: {
        addDigit: (state, action) => {
            let d = action.payload.d;
            state.value = d[0] + state.value
        },
        eraseDigit: (state) => {
            state.value = state.value.slice(1)
        },
        reset: (state)  => {
            state.value = ''
        }
    }
})

export const { addDigit, eraseDigit, reset } = inputSlice.actions;

export default inputSlice.reducer;