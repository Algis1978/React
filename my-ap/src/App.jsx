import Kvadratas from "./components/Kvadratas"
import Apskritimas from "./components/Apskritimas"

//Funkcija App
function App() {
  return (
      <>
  <Kvadratas tekstas="Ne tas pats"/>
  <Kvadratas tekstas="Tai tas pats"/>
  <Apskritimas spalva="green" tekstas={"Taip jau yra"}/>
  <Apskritimas spalva="darkorange" tekstas="Taip jau ir nėra"/>
  </>
  )
}

export default App;
