import {useState} from "react"

export default function TextInput () {
    const [value, setValue] = useState()
    
    const change = (e) => {
        console.log(e.target.value)

        setValue(e.target.value)
    }

    return (
        <>
    
        <h2>Pasirinkite figūrų spalvą:</h2>
        <input onChange={change}  type="color" value={value}></input>
        <h2>Pasirinkite figūrų skaičių:</h2>
        <input onChange={change}  type="number" value={value}></input>
    
        </>
    )
}
//ONCHANGE paima pakeitimus.