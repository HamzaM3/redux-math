import { useDispatch } from "react-redux"
import { startGame } from "../state"

export default function MainMenu() {
    const dispatch = useDispatch()
    return <>
        <h1>Mental math</h1>
        <button onClick={() => dispatch(startGame())}>Start</button>
    </>
}