import { useState } from "react";

export default function Apskritimas12( props ) {
    const [skaicius1, setSkaicius1] = useState(0);
    const [skaicius2, setSkaicius2] = useState(0);

    return (
      <>
      <div className="div">
        <div className="apskritimas" style ={{backgroundColor:props.color1}}>
        <div className="apskrNr">{skaicius1}</div>
        </div>
      </div>
      <div className="div">
        <div className="apskritimas" style ={{backgroundColor:props.color2}}>
        <div className="apskrNr">{skaicius2}</div>
        </div>   
      </div>
        
      </>
    )
}