import {useState} from "react"

export default function SelectInput () {
    const [value, setValue] = useState()
    
    const change = (e) => {
        console.log(e.target.value)

        setValue(e.target.value+"jjh")
    }

    return (
        <>
        <div className="div">
        <select onChange={change} value={value}>
            <option value={1}>vienas</option>
            <option value={2}>du</option>
            <option value={3}>trys</option>
        </select>
        </div>
        </>
    )
}
//ONCHANGE paima pakeitimus.