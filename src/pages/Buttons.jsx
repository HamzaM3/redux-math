import { SVGRestart, SVGPlay } from "./svg"

function Button( {Logo, onClick} ) {
    return <div class="button" onClick={onClick}>
        <Logo/>
    </div>
}

export function PlayButton() {
    return <Button Logo={SVGPlay} onClick={()=>undefined}/>
}

export function RestartButton() {
    return <Button Logo={SVGRestart} onClick={()=>undefined}/>
}