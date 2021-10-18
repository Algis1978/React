import Skritulys from "./components/Skritulys"
import skrituliuSkaicius from "./functions/skrituliuGeneratorius"
import Banner from "./components/Banner"

const skrituliai = skrituliuSkaicius(10)
const banner = Banner

//Funkcija App
function App() {
  return (
<>
<banner/>
{skrituliai.map( (skritulys, index) => <Skritulys key={index} circleColor={skritulys.circleColor} circleBorder={skritulys.circleBorder} circleNumber={skritulys.circleNumber}/>)}
</>
  );
}

export default App;
