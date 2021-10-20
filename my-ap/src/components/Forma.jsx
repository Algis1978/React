import {useState} from "react"
export default function Forma({turinysOn}) {
  //Ivedami reikalingi trys kintamieji
  const [skaicius, setSkaicius] = useState(0);
  const [spalva, setSpalva] = useState('#000000');
  const [figura, setFigura] = useState('S');

  const formosKontrole = (e, what) => {
    switch(what) {
      case 'skaicius':
        setSkaicius(e.target.value);
        break;
      case 'spalva':
        setSpalva(e.target.value);
        break;
      case 'figura':
        setFigura(e.target.value);
        break;
        default:;
    }
  }

  const mygtukasOnClick = () => {
    const data = {
      spalva:spalva,
      figura:figura,
      skaicius:skaicius
    }
    turinysOn(data)
  }
    return (
      <>
      <div className="forma">
        <h2>Įveskite skaičių:</h2>
        <input type="text" onChange={(e) => formosKontrole (e, "skaicius")} value={skaicius}></input>
        <h2>Įveskite spalvą</h2>
        <input type="color" onChange={(e) => formosKontrole (e, "spalva")} value={spalva}></input>
        <h2>Pasirinkite figūrą:</h2>
        <select onChange={(e) => formosKontrole (e, "figura")} value={figura}>
          <option value="S">Skritulys</option>
          <option value="K">Kvadratas</option>
          <option value="HL">Horizontali linija</option>
          <option value="VL">Vertikali linija</option>
        </select>
        <button onClick={mygtukasOnClick}>Patvirtinkite</button>
      </div>
      </>
    )
  }
  