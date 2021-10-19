import {useState} from "react"

export default function TextInput () {
    const [value, setValue] = useState()
    
    const change = (e) => {
        console.log(e.target.value)

        setValue(e.target.value)
    }

    return (
        <>
        <div className="div">
        <input onChange={change}  type="text" value={value}></input>
        </div>
        </>
    )
}
//ONCHANGE paima pakeitimus.