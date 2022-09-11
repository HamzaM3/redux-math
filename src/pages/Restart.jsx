import { useDispatch, useSelector } from "react-redux"
import { startGame } from "../state"


export default function Restart() {
    const score = useSelector(state => state.operands.score)
    const dispatch = useDispatch()
    return <>
        <h1>Restart</h1>
        <div>Score: {score}</div>
        <button onClick={() => dispatch(startGame())}>Restart</button>
    </>
}