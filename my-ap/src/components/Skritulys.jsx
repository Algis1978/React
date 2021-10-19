import { useState } from "react";

export default function Skritulys( {spalva} ) {

    const [counter, setCounter] = useState(20);
    const addNumber = () => {
        const changeCounter = counter + 1;
        setCounter(changeCounter);
    }
    const addNumber10 = () => {
        const changeCounter = counter + 10;
        setCounter(changeCounter);
    }
        const addNumber0 = () => {
        const changeCounter = 0;
        setCounter(changeCounter);
    }
    
    const [color, setColor] = useState("cadetblue");
    const naujaSpalva = () => {
        const changeColor = "darkorange";
        setColor(changeColor);
    }
    return (
        <div className="skritulys">
            <div class="skaiciuokle" style={ {color:spalva} }>{counter}</div>
            <button class="mygtukas" onClick={addNumber}>Spausk čia ir didink po vienetą!</button>
            <button class="mygtukas2" onClick={addNumber10}>Spausk čia ir didink po 10 vienetų!</button>
            <button class="mygtukas3" onClick={addNumber0}>Spausk čia ir sumažink iki nulio &#9851.</button>
            <button class="mygtukas4" onClick={naujaSpalva}>Spausk čia ir pakeisk spalvą.</button>
        </div>
    )
}

