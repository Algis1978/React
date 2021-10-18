import Skritulys from "./components/Skritulys"
import trinamasSkritulys from "./components/trinamasSkritulys"
import skrituliuSkaicius from "./functions/skrituliuGeneratorius"

const skrituliai = skrituliuSkaicius(10)
const skrituliai2 = skrituliuSkaicius(10)

//Funkcija App
function App() {
  return (
    <>
      {skrituliai.map( (skritulys, index) => <Skritulys key={index} circleColor={skritulys.circleColor} circleBorder={skritulys.circleBorder} circleNumber={skritulys.circleNumber}/>)}
      {skrituliai2.map( (skritulys, index) => <trinamasSkritulys key={index} circleColor={skritulys.circleColor} circleBorder={skritulys.circleBorder} circleNumber={skritulys.circleNumber}/>)}
    </>
  );
}

export default App;
