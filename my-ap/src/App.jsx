import {useState} from "react"
import ButtonColorChanger from"./components/ButtonColorChanger"
//Funkcija App
function App() {

  const [background, setBackground] = useState('cornsilk');

  const changeBackground = () => {
    setBackground("#"+Math.floor(Math.random()*16777215).toString(16))
  }
  return (
  <>
   <div className="kvadratas" >
     <ButtonColorChanger colorCh={changeBackground}></ButtonColorChanger>
   </div>
  </>
  )
}

export default App;
