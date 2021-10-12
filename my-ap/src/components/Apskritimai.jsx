function Apskritimas ({circleColor, circleBorder, circleNumber}) {
    return (
     <>
     <div className="circle" style={{ backgroundColor:circleColor, border:circleBorder}}>
          <span>{circleNumber}</span>
        </div>
     </>
    )
}
//Apskritimų generavimo algoritmas:
let hexKodas = function() {
  let skaiciai = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let h = "#";
  for (let i = 0; i<=5; i++) {
  let j = Math.round( Math.random()*(skaiciai.length-1))
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
  let apskritimuSablonas = [];
  for (let i = 1; i<=k; i++) {
    apskritimuSablonas.push(
    {
    circleColor: hexKodas(), 
    circleBorder: "6px "+borderStyle()+" "+hexKodas(),
    circleNumber:  i
    })
  }
  return apskritimuSablonas
}
//Export sekcija:
export default Apskritimas