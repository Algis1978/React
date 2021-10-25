//Sukuriamas vienas duomenų masyvas su elementu-objektu, kuriame dvi savybės - figura su jam priskirtu lauku.
// toliau useEffect, localStorage ir ID priskyrimo pamoka
// useEffect praneša apie paruoštą pavaizduoti komponentą ir pasitikrina localStorage atmintį. Jei joje kažkas yra, tuomet paruošiamas komponentas su išsaugotais duomenimis
//localStorage naudojimas su JSON
// ID priskyrimas kiekvienam elementui. Susikuriama JS funkcija, kuri eis į localStorage ir paims numerius
//Po to galima naudojantis id ištrinti figūras arba jas keisti.

import { useState, useEffect } from "react";
import FieldAnimal from "./components/FieldAnimal";
//import ID generatorius
import idGenerator from "./functions/idGenerator";


function App() {
    //sustatomi reikšmių masyvai
    const [field, setField] = useState([])
    const [fieldNumber, setFieldNumber] = useState(1)

    const add = (what) => {
        //Negalima tiesiogiai keisti steito masyvo, tai padaroma jo kopija su slice
        const fieldCopy = field.slice();
        //sudaromas objektas su savybėm ID, rūšis ir laukas, kur ID paimamas iš ID gneratoriaus, o lauko numeris - iš fieldNumber steito, tuo pat metu rūšis paimama iš button įvykio.
        fieldCopy.push({id:idGenerator(), animal:what, field:parseInt(fieldNumber)});
        //Sudaromas aka 'steitas' iš objekto
        setField(fieldCopy);
        console.log(fieldCopy);

        //Naršyklės localStorage įvedamas įrašas, kurio savybė yra sukurtas 'fieldCopy' objektas
        localStorage.setItem('animals', JSON.stringify(fieldCopy))
    }
    //Sukuriamas 
    const selectField = (e) => {
        setFieldNumber(e.target.value)
    }
    // //useEffect pasileidžia persikrovus programai
    // //masyve [] sekami steitai ir paleidinėja funkciją iš naujo pasikeitus steitui
    // //Gali būti keletas useEffect hukų - jie netrukdo vienas kitam.
    // useEffect(() => {
    //     console.log('susirenderino')
    // }, []);
    // //localStorage reikia dviejų argumentų ir vienintelis duomenų tipas - tekstas
    // useEffect(() => {
    //     localStorage.setItem('pasisveikinimas2', 'Bu bu bu')
    //     //išvedama į konsolę
    //     console.log(localStorage.getItem('pasisveikinimas'))
    //     localStorage.removeItem('pasisveikinimas')
    //     console.log(localStorage.getItem('pasisveikinimas3'))
    //     //nesant objekto išmetamas null duomuo
    //     localStorage.setItem('pasisveikinimas4', [1, 2, 3])
    //     localStorage.setItem('pasisveikinimas5', {0:1, 2:2, 4:3})

    //     //Gaminam JSON bylą, tokiu būdu galima padėti į localStorage objektus json pavidale
    //     const ba = {0:1, 2:2, 4:3}
    //     const baJson = JSON.stringify(ba)
    //     localStorage.setItem('pasisveikinimas6', baJson)
    //     //pasiimam atgal
    //     localStorage.getItem('pasisveikinimas6')
    // }, []);

    //Funkcija, kuri trina figuras 
    const trinti = (id) => {
        const fieldCopy = field.slice();
        const ind = fieldCopy.findIndex(e => e.id == id);
        fieldCopy.splice(ind, 1)
        setField(fieldCopy)
        //nurodoma localStorage, kad nebėra id figuros
        localStorage.setItem('animals', JSON.stringify(fieldCopy))
    }
    //Funkcija, kuri trina grupę figūrų 
    const trintiGrupe = (group) => {
        const fieldCopy = field.slice();
        while(true) {
            const ind = fieldCopy.findIndex(e => e.animal === group);
            if (ind < 0) {
                break;
            }
            fieldCopy.splice(ind, 1);
        }
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy))
    }

    useEffect(() => {
        const animalsFromStorage = localStorage.getItem('animals')
        if (animalsFromStorage !== null) {
            setField(JSON.parse(animalsFromStorage))
        }
    }, []);
    useEffect(() => {
        localStorage.clear()
    }, []);

    //App return
    return (
        <>
        <div className="field">
            <div className="laukoNr">Pirmas laukas</div>
            <div>
          {field.map((fieldAnimal, i)=> <FieldAnimal key={i} field={1} fieldAnimal={fieldAnimal} trinti={trinti}></FieldAnimal>)}
            </div>
        </div>
        <div className="field">
        <div className="laukoNr">Antras laukas</div>
        <div>
          {field.map((fieldAnimal, i)=>  <FieldAnimal key={i} field={2} fieldAnimal={fieldAnimal}trinti={trinti}></FieldAnimal>)}
        </div>
        </div>
        <div className="field">
        <div className="laukoNr">Trečias laukas</div>
        <div>
          {field.map((fieldAnimal, i)=>  <FieldAnimal key={i} field={3} fieldAnimal={fieldAnimal}trinti={trinti}></FieldAnimal>)}
        </div>
        </div>

        <div className="mygtukuLaukas">
        <h2>Pasirinkite lauką:</h2>
        <select value={fieldNumber} onChange={selectField}>
                <option value={1}>Pirmas laukas</option>
                <option value={2}>Antras laukas</option>
                <option value={3}>Trečias laukas</option>
            </select>
            <h2>Pridėkite gyvūnus:</h2>
        <button className = "mygtukas4"  onClick={() => add('cow')}>Pridėti karvę</button>
        <button className = "mygtukas4" onClick={() => add('sheep')}>Pridėti avį</button>
        <button className = "mygtukas4" onClick={() => add('chicken')}>Pridėti vištą</button>
        </div>

        <div className="mygtukuLaukas">
            <h2>Trinkite gyvūnų grupes:</h2>
        <button className = "mygtukas3"  onClick={() => trintiGrupe('cow')}>Trinti karves</button>
        <button className = "mygtukas3" onClick={() => trintiGrupe('sheep')}>Trinti avis</button>
        <button className = "mygtukas3" onClick={() => trintiGrupe('chicken')}>Trinti vištas</button>
        </div>
        </>
    );
}

export default App;