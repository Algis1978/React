import Apskritimas from "./components/Apskritimai"
import apskritimuSkaicius from "./functions/apskritimuGeneratorius"

const apskritimai = apskritimuSkaicius(10)

//Funkcija App
function App() {
  return (
<>
{apskritimai.map( (apskritimas, index) => <Apskritimas key={index} circleColor={apskritimas.circleColor} circleBorder={apskritimas.circleBorder} circleNumber={apskritimas.circleNumber}/>)}
</>
  );
}

export default App;
