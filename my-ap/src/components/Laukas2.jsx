//Čia šitas reikalingas panaudoti steitus
import {useState} from "react"
export default function Laukas2 (props) {
    //{backgroundImage} yra propsas, nurodytas app.jsx renderyje prie <Laukas2/> tago arba rašoma props be {}, props čia yra objektas, kuris laiko propsus

    //Čia yra hukas, kuris savyje laiko steitą addAnimals
    const [addAnimals, setAddAnimals] = useState('')
    return (
        <>
        <div className="field" style={{backgroundImage:props.backgroundImage}}>
        <div className="laukoNr">Antras laukas</div>
        </div>
        </>
    )
}