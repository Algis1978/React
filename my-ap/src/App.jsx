import {useState} from "react"
import TextInput from "./components/TextInput"
import SelectInput from "./components/SelectInput"
import CheckBoxInput from "./components/CheckBoxInput"
import Kvadratas from "./components/Kvadratas"
import Mygtukas from "./components/Mygtukas"
import Apskritimas from "./components/Apskritimas"
import VertikaliLinija from "./components/VertikaliLinija"
import HorizontaliLinija from "./components/HorizontaliLinija"

//Funkcija App
function App() {

  const [background, setBackground] = useState('cornsilk');

  const changeBackground = () => {
    setBackground("#"+Math.floor(Math.random()*16777215).toString(16))
  }
  return (
  <>
  <div className="div">
   <TextInput/>
   <SelectInput/>
   <Mygtukas tekstas="Patvirtinti"/>
   </div>
  <div className="div2">
   <Apskritimas/>
   <Kvadratas/>
   <HorizontaliLinija/>
   <VertikaliLinija/>
   </div>
  </>
  )
}

export default App;

// Reikia padaryti du text inputus (vienas gali būti color), vieną selektą ir mygtuka. Į vieną text inputą rašoma spalva, o į kitą skaičius, selekte pasirenkama forma (circle, square, vertical line, horizontal line) o paspaudus mygtuką pasirodo tokios spalvos ir formos figūros. Figūrų kiekis priklauso nuo skaičiaus inputo