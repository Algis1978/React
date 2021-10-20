//Čia šitas reikalingas panaudoti steitus
import {useState} from "react"
export default function Laukas1 ({backgroundImage}) {
    //{backgroundImage} yra propsas, nurodytas app.jsx renderyje prie <Laukas1/> tago arba rašoma props be {}, props čia yra objektas, kuris laiko propsus

    //Čia yra hukas, kuris savyje laiko steitą addAnimals
    return (
        <>
        <div className="field" style={{backgroundImage}}>
        <div className="laukoNr">Pirmas laukas</div>
        </div>
        </>
    )
}