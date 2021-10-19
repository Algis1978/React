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
            <h2>Pasirinkite figūrą:</h2>
        <select onChange={change} value={value}>
            <option value={1}>Skritulys</option>
            <option value={2}>Kvadratas</option>
            <option value={3}>Horizontali linija</option>
            <option value={3}>Vertikali linija</option>
        </select>
        </div>
        </>
    )
}
//ONCHANGE paima pakeitimus.