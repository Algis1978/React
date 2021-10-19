import useState from "react"
import buttonColorChanger from"./components/buttonColorChanger"
//Funkcija App
function App() {

  const [background, setBackground] = useState('cornsilk');

  const changeBackground = () => {
    setBackground("#"+Math.floor(Math.random()*16777215).toString(16))
  }
  return (
  <>
   <div className="kvadratas" >
     <buttonColorChanger colorCh={changeBackground}></buttonColorChanger>
   </div>
  </>
  )
}

export default App;
