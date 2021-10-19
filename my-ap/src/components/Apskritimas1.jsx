import { useState } from "react";

export default function Apskritimas1( props ) {
    const [skaicius, setSkaicius] = useState(0);
    return (
        <div className="apskritimas" style ={{backgroundColor:props.color}}>

        </div>
    )
}
