import Clock from "./components/Clock"
import Main from "./components/Main"
//Funkcija App
function App() {
  return (
      <>
    <Clock clockTime={new Date().toLocaleTimeString()}/>
  </>
  )
}

export default App;
