import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { pressKey } from "../state"


const Game = () => {
    const dispatch = useDispatch()
    const { operand1, operand2, score } = useSelector(state => state.operands)
    const input = useSelector(state => state.input.value)
    const { nbTurns, maxTurns} = useSelector(state => state.turn)
    const keyListener = useRef(null)

    useEffect(() => {
        document.body.removeEventListener('keydown', keyListener.current)
        keyListener.current = ({key}) => dispatch(pressKey(key))
        document.body.addEventListener('keydown', keyListener.current)
        return () => {
            document.body.removeEventListener('keydown', keyListener.current)
        }
    }, [dispatch])

    return <>
        <h1>Game</h1>
        <div>{operand1}</div>
        <div>{operand2}</div>
        <div>_{input}</div>
        <div>Score: {score}</div>
        <div>{nbTurns.toString()}/{maxTurns}</div>
    </>
}

export default Game;