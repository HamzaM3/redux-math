import { configureStore } from '@reduxjs/toolkit';
import { addDigit, eraseDigit, reset as resetInput} from './input';
import { restart as restartOperands, success, fail } from './operands';
import { next, restart as restartTurns } from './turn';
import { game, restart as restartScreen } from './screen';

import screenReducer from './screen';
import operandsReducer from './operands';
import turnReducer from './turn';
import inputReducer from './input';


export const store = configureStore({
  reducer: {
    screen: screenReducer,
    input: inputReducer,
    operands: operandsReducer,
    turn: turnReducer
  },
});

function testAnswer(a, b, c) {
    return a + b === Number(c)
}

function enterAnswer() {
    return (dispatch, getState) => {
        const { input, operands } = getState()
        const { operand1: a, operand2: b } = operands
        const c = input.value;

        if (testAnswer(a, b, c)) {
            dispatch(success())
        } else {
            dispatch(fail())
        }

        dispatch(resetInput())
        dispatch(next())
    }
}

function restartIfOver() {
    return (dispatch, getState) => {
        const { turn } = getState()
        const { nbTurns, maxTurns } = turn

        if (nbTurns > maxTurns)
            dispatch(restartScreen())
    }
}
 
export const pressKey = (key) => {
    return (dispatch) => {
        if (/^\d$/.test(key)){
            dispatch(addDigit({d: key}));
        } else if (key === 'Enter') {
            dispatch(enterAnswer());
            dispatch(restartIfOver())
        } else if (key === 'Backspace') {
            dispatch(eraseDigit());
        }
    }
}

export const startGame = () => {
    return (dispatch) => {
        dispatch(resetInput())
        dispatch(restartTurns())
        dispatch(restartOperands())
        dispatch(game())
    }
}