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
function apskritimuSkaicius (k) {
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
export default apskritimuSkaicius;