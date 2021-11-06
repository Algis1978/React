import { useState, useEffect, useRef } from "react";
import ZveriuSarasas from "./Components/ZveriuSarasas";
import SelectMenu from "./Components/SelectMenu";
import ZverisSukurti from "./Components/ZverisSukurti"
import axios from "axios";

function App() {

const [visizverys, setVisizverys] = useState ([]);
    
    // cia reikalinga grazinimui atgal i html (atnaujinti)

    const [atnaujinti, setAtnaujinti] = useState(Date.now())
    
 
useEffect( () => {
    axios.get('http://localhost:3003/zveris')
    .then (res => {
        setVisizverys(res.data);
        console.log(res.data)
    })
}, [atnaujinti])


//[atnaujinti] - seka atnaujinimu pasikeitimus
const [vardas, setVardas] = useState([])
 
useEffect( () => {
    axios.get('http://localhost:3003/zveriu-vardas')
    .then (res => {
        setVisizverys(res.data);
        console.log(res.data)
    })
}, [atnaujinti])

    //Ivesti i duomenų baze

    const sukurti = vzveris => {
        axios.post('http://localhost:3003/zveris', vzveris)
        .then (res => {
            setAtnaujinti(Date.now());
            console.log(res.data)
        })

    }
    return (
        <>
            <h1>ŽVĖRINČIUS</h1>
            <SelectMenu></SelectMenu>
            <div className="container">
            <ZverisSukurti sukurti={sukurti}></ZverisSukurti>
            <div className="area">
            <ZveriuSarasas visizverys={visizverys}></ZveriuSarasas>
            </div>
            </div>            
        </>
    );

}

export default App;