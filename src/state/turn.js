import { createSlice } from "@reduxjs/toolkit";


export const turnSlice = createSlice({
    name: 'turn',
    initialState: {
        nbTurns: 1,
        maxTurns: 20
    },
    reducers: {
        next: state => {
            state.nbTurns = state.nbTurns + 1
        },
        restart: state => {
            state.nbTurns = 1;
        },
        setMaxTurn: (state, action) => {
            state.maxTurns = action.payload
        }
    }
})

export const { next, restart, setMaxTurn } = turnSlice.actions;

export default turnSlice.reducer;
