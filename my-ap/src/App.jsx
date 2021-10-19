import {useState} from "react"
import TextInput from "./components/TextInput"
import SelectInput from "./components/SelectInput"
import CheckBoxInput from "./components/CheckBoxInput"
import Kvadratas from "./components/Kvadratas"

//Funkcija App
function App() {

  const [background, setBackground] = useState('cornsilk');

  const changeBackground = () => {
    setBackground("#"+Math.floor(Math.random()*16777215).toString(16))
  }
  return (
  <>
   <TextInput/>
   <SelectInput/>
   <CheckBoxInput/>
   <Kvadratas/>
  </>
  )
}

export default App;
