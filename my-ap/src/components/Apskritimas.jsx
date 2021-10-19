import { useState } from "react";

export default function Apskritimas1( props ) {
    const [skaicius1, setSkaicius1] = useState(0);
    const [skaicius2, setSkaicius2] = useState(0);


    const addNumber1 = () => {
      setSkaicius1(skaicius1+1)
    }
    const addNumber2 = () => {
      setSkaicius2(skaicius2+skaicius1)
    }
    const addNumber0 = () => {
      setSkaicius1(0)
      setSkaicius2(0)
    }

    return (
      <>
      <div className="div">
        <div className="apskritimas" style ={{backgroundColor:props.color1}}>
        <div className="apskrNr">{skaicius1}</div>
        </div>
        <button className="mygtukas" onClick={addNumber1}>Per vieną</button>
      </div>
      <div className="div">
        <div className="apskritimas" style ={{backgroundColor:props.color2}}>
        <div className="apskrNr">{skaicius2}</div>
        </div>
        <button className="mygtukas" onClick={addNumber2}>Per du</button>
      </div>
        <button className="mygtukas3" onClick={addNumber0}>Nunulinti</button>
      </>
    )
}