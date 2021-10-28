import { useState, useEffect, useRef } from "react";
import ZveriuSarasas from "./Components/ZveriuSarasas";
import axios from "axios";

function App() {

    const [visizverys, setVisizverys] = useState ([]);
 
useEffect( () => {
    axios.get('http://localhost:3003/zveris')
    .then (res => {
        setVisizverys(res.data);
        console.log(res.data)
    })
}, [])
    return (
        <>
            <h1>ŽVĖRINČIUS</h1>
            <div className="area">
            <ZveriuSarasas visizverys={visizverys}></ZveriuSarasas>
            </div>
        </>
    );

}

export default App;