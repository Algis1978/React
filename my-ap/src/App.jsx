import { useState, useEffect } from "react";
import FieldAnimal from "./components/FieldAnimal";


function App() {

    const [field, setField] = useState([])
    const [selectField, setSelectField] = useState([])

    const add = (what) => {
        const fieldCopy = field.slice();
        fieldCopy.push({animal:what});
        setField(fieldCopy);
        console.log(fieldCopy);
    }

    const choose = (what) => {
        const selectFieldCopy = selectField.slice();
        selectFieldCopy.push({laukas:what});
        setSelectField(selectFieldCopy);
        console.log(selectFieldCopy);
    }

    // useEffect(() => {
    //     console.log('susirenderino')
    // }, []);

    return (
        <>
        <div className="field">
            <div className="laukoNr">Pirmas laukas</div>
        <div>
          {field.map((fieldAnimal, i)=><FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>)}
        </div>
        </div>
        <div className="field">
        <div className="laukoNr">Antras laukas</div>
        <div>
          {field.map((fieldAnimal, i)=><FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>)}
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