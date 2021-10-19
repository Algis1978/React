import Apskritimas12 from "./components/apskritimas12"
import { useState } from "react";
//Funkcija App
function App() {
  const [skaicius1, setSkaicius1] = useState(0);
  const [skaicius2, setSkaicius2] = useState(0);

  const addNumber1 = () => {
    setSkaicius1(skaicius1+1)
  }
  const addNumber2 = () => {
    setSkaicius2(skaicius2+skaicius1)
  }
  const addNumber0 = () => {
    setSkaicius1(0)
    setSkaicius2(0)
  }
  return (
      <>
    <Apskritimas12 color1={'azure'} color2={'yellow'} skaicius1={skaicius1} skaicius2={skaicius2}/>
    <button className="mygtukas" onClick={addNumber1}>Per vieną</button>
    <button className="mygtukas" onClick={addNumber2}>Per du</button>
    <button className="mygtukas4" onClick={addNumber0}>Nunulinti</button>

  </>
  )
}

export default App;
