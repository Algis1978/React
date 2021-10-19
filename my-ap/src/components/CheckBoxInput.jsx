import {useState} from "react"

export default function CheckBoxInput () {
    const [value, setValue] = useState([true, false, true, false])
    
    const change = (e) => {
        console.log(e.target.value)
        const valueCopy = value.slice();
        valueCopy[e] = !valueCopy[e]
        setValue(valueCopy)
    }
    return (
        <>
        <div className="div">
        <input onChange={() => change(0)} type="checkbox" checked={value}></input>
        <input onChange={() => change(0)} type="checkbox" checked={value}></input>
        <input onChange={() => change(0)} type="checkbox" checked={value}></input>
        <input onChange={() => change(0)} type="checkbox" checked={value}></input>
        </div>
        </>
    )
}
//ONCHANGE paima pakeitimus.
//Įvestos vertės perkeliamos į steitą, iš kur jį galima paimti.