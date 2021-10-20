export default function ButtonColorChanger ({colorCh}) {
 return (
     <button onClick={() => colorCh("#"+Math.floor(Math.random()*16777215).toString(16))}>Keisk šio kvadrato spalvą!</button>
 )
}