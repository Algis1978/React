//Čia šitas reikalingas panaudoti steitus
import {useState} from "react"
export default function Laukai12 (props) {
    //{backgroundImage} yra propsas, nurodytas app.jsx renderyje prie <Laukas2/> tago arba rašoma props be {}, props čia yra objektas, kuris laiko propsus

    //Čia yra hukai, kurie savyje laiko steitus addAnimals 1 ir 2  
    const [addAnimals1, setAddAnimals1] = useState('')
    const [addAnimals2, setAddAnimals2] = useState('')
    //<div>{addAnimals1}</div> - sukuriamas laukas, kur veiks steitas
return (   
    <>
        <div className="field" style={{backgroundImage:props.backgroundImage1}}>
        <div className="laukoNr">Pirmas laukas</div>
        <div>{addAnimals1}</div>
        </div>

        <div className="field" style={{backgroundImage:props.backgroundImage2}}>
        <div className="laukoNr">Antras laukas</div>
        <div>{addAnimals2}</div>
        </div>
    </>
)
}