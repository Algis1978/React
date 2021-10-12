import logo from './logo.svg';
import './App.scss';
import Box from "./components/Box.jsx"
import Apskritimas from "./components/Apskritimai"
import Simple from "./components/simple.jsx"

const data = [ 
  {
  boxColor: 'green',
  boxNumber: 34,
  ls: "1px"
},
  {
  boxColor: 'yellow',
  boxNumber: 12,
  ls: "4px"
}
  
  ]
//Apskritimų objektų generavimo algoritmas:
let hexKodas = function() {
  let skaiciai = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let h = "#";
  for (let i = 0; i<=5; i++) {
  let j = Math.round( Math.random()*(skaiciai.length-1) )
  h += skaiciai[j];
  }
  return h
}
let borderStyle = function() {
  let stiliai = ["solid", "dashed", "double", "dotted", "groove", "ridge"];
  let h = "";
  let j = Math.round( Math.random()*(stiliai.length-1))
  h = stiliai[j];
  return h
}
let apskritimuSkaicius = function (k) {
  let apskritimuMasyvas = [];
  for (let i = 1; i<=k; i++) {
    apskritimuMasyvas.push(
    {
    circleColor: hexKodas(), 
    circleBorder: "6px "+borderStyle()+" "+hexKodas(),
    circleNumber:  i
    })
  }
  return apskritimuMasyvas
}  
const apskritimai = apskritimuSkaicius(8)

//Funkcija App
function App() {
  return (
<>
{/* <Box/>
<Box boxcolor={'darkorange'} boxNumber={1}/>
<Box boxcolor={'black'} boxNumber={2}/> */}
{/* <Apskritimas/> */}
{Simple}
{data.map( (box, index) => <Box key={index} boxColor={box.boxColor} ls={box.ls} boxNumber={box.boxNumber}/>)}
{apskritimai.map( (apskritimas, index) => <Apskritimas key={index} circleColor={apskritimas.circleColor} circleBorder={apskritimas.circleBorder} circleNumber={apskritimas.circleNumber}/>)}
</>
  );
}

export default App;
