import { useState, useEffect } from "react";
import FieldAnimal from "./components/FieldAnimal";


function App() {

    const [field, setField] = useState([])

    const add = (what) => {
        const fieldCopy = field.slice();
        fieldCopy.push({animal:what});
        setField(fieldCopy);
        console.log(fieldCopy);
    }

    // useEffect(() => {
    //     console.log('susirenderino')
    // }, []);

    return (
        <div className="field">
        <div>
          {field.map((fieldAnimal, i)=><FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>)}
        </div>
        <button className = "mygtukas4"  onClick={() => add('cow')}>Pridėti karvę</button>
        <button className = "mygtukas4" onClick={() => add('sheep')}>Pridėti avį</button>
        <button className = "mygtukas4" onClick={() => add('chicken')}>Pridėti vištą</button>
        </div>
    );

}

export default App;