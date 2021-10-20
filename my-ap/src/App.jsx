import {useState} from "react"
import ButtonColorChanger from"./components/ButtonColorChanger"
//Funkcija App
export default function App() {

  const [background, setBackground] = useState('cornsilk');

  const changeBackground = (color) => {
    setBackground(color)
  }
  return (
  <>
   <div className="kvadratas" style={{backgroundColor:background}} >
     <ButtonColorChanger colorCh={changeBackground}></ButtonColorChanger>
   </div>
  </>
  )
}

