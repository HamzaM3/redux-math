import { createSlice } from "@reduxjs/toolkit";

function newOperand() {
    return Math.floor(Math.random()*99) + 1
}

export const operandsSlice = createSlice({
    name:' game',
    initialState: {
        operand1: newOperand(), 
        operand2: newOperand(), 
        score: 0
    },
    reducers: {
        restart: (state) => {
            state.operand1 = newOperand()
            state.operand2 = newOperand()
            state.score = 0
        },
        success: (state) => {
            state.operand1 = newOperand()
            state.operand2 = newOperand()
            state.score += 1 
        },
        fail: (state) => {
            state.operand1 = newOperand()
            state.operand2 = newOperand()
        }
    }
})

export const { restart, success, fail } = operandsSlice.actions;

export default operandsSlice.reducer;