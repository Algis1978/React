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
let topPosition = function() {
  let j = Math.round( Math.random()*85 ) + "px" 
  return "j"
}
let leftPosition = function() {
  let j = Math.round( Math.random()*90 ) + "px" 
  return "j"
}

function skrituliuSkaicius (k) {
  let skrituliuMasyvas = [];
  for (let i = 1; i<=k; i++) {
    skrituliuMasyvas.push(
    {
    circleColor: hexKodas(), 
    circleBorder: "6px "+borderStyle()+" "+hexKodas(),
    circleNumber:  i

    })
  }
  
  return skrituliuMasyvas
}  
export default skrituliuSkaicius;