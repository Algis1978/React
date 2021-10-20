import {useState} from "react"
import TextInput from "./components/TextInput"
import SelectInput from "./components/SelectInput"
import CheckBoxInput from "./components/CheckBoxInput"
import Kvadratas from "./components/Kvadratas"
import Mygtukas from "./components/Mygtukas"
import Apskritimas from "./components/Apskritimas"
import VertikaliLinija from "./components/VertikaliLinija"
import HorizontaliLinija from "./components/HorizontaliLinija"
import Forma from "./components/Forma"
import Turinys from "./components/Turinys"

//Funkcija App
export default function App() {

  const [turinys, setTurinys] = useState( {spalva:"", figura:"", skaicius:[]})

  const turinysOn = (data) => {
      data.skaicius = new Array(parseInt (data.skaicius)).fill(null)
      setTurinys(data)
  }

  return (
  <>
  <div className="zona">
    <Forma turinys={turinys}/>
    <Turinys turinysOn={turinysOn}/>
   </div>
  </>
  )
}

// Reikia padaryti du text inputus (vienas gali būti color), vieną selektą ir mygtuka. Į vieną text inputą rašoma spalva, o į kitą skaičius, selekte pasirenkama forma (circle, square, vertical line, horizontal line) o paspaudus mygtuką pasirodo tokios spalvos ir formos figūros. Figūrų kiekis priklauso nuo skaičiaus inputo