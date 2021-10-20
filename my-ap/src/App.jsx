import { useState, useEffect } from "react";
import FieldAnimal from "./components/FieldAnimal";
import Laukas2 from "./components/Laukas2";
import Laukas1 from "./components/Laukas1"
import Laukai12 from "./components/Laukai12"


function App() {
    //sustatomi reikšmių masyvai
    const [field, setField] = useState([])
    const [selectField, setSelectField] = useState('Laukas1')

    const choose = (what) => {
        setSelectField(what);
        console.log(setSelectField)
    }
    const add = (what) => {
        //Negalima tiesiogiai keisti steito masyvo, tai padaroma jo kopija su slice
        const fieldCopy = field.slice();
        fieldCopy.push({animal:what, laukas:selectField});
        setField(fieldCopy);
        console.log(fieldCopy);
    }

    useEffect(() => {
        console.log('susirenderino')
    }, []);
    return (
        //backgroundImage cia yra propsas
        // <Laukai12 backgroundImage1={"linear-gradient(135deg, rgb(18, 93, 18), rgb(165, 240, 16))"} backgroundImage2={"linear-gradient(135deg, green, yellow)"}/>
        // <Laukas1 backgroundImage={"linear-gradient(135deg, rgb(18, 93, 18), rgb(165, 240, 16))"}/>
        // <Laukas2 backgroundImage={"linear-gradient(135deg, green, yellow)"}/>
        <>
        <div className="field">
            <div className="laukoNr">Pirmas laukas</div>
        <div>
        {field.map((fieldAnimal, i)=> { 
              if (fieldAnimal.laukas==='laukas1') { 
                  return (<FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>);
                } return null;}
                )}
        </div>
        </div>
        <div className="field">
        <div className="laukoNr">Antras laukas</div>
        <div>
          {field.map((fieldAnimal, i)=> { 
              if (fieldAnimal.laukas==='laukas2') { 
                  return (<FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>);
                } return null;}
                )}
        </div>
        </div>

        <button className = "mygtukas3" onClick={() => choose('laukas1')}>Pirmas laukas</button>
        <button className = "mygtukas3" onClick={() => choose('laukas2')}>Antras laukas</button>
        <button className = "mygtukas4"  onClick={() => add('cow')}>Pridėti karvę</button>
        <button className = "mygtukas4" onClick={() => add('sheep')}>Pridėti avį</button>
        <button className = "mygtukas4" onClick={() => add('chicken')}>Pridėti vištą</button>
        </>
    );
}

export default App;