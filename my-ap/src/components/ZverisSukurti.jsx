import {useState} from "react";

export default function ZverisSukurti ( {sukurti} ) {

    const [inputs, setInputs] = useState(
        {Vardas: ""})

    const formControl = (e, what) => {
        const inputsCopy = {...inputs};
        inputsCopy[what] = e.target.value;
        setInputs (inputsCopy);
    }

    const handleSukurti = () => {
        sukurti(inputs);
    }
    return (
        <>
        <div className="zverissukurti">
            <h2>Įveskite naują žvėrį:</h2>
            <div className="menu">
            <p><span className="text">Vardas:</span></p><input type="text" value={inputs["Vardas"]} onChange={(e) => formControl(e, "Vardas")} require />
            <p><span className="text">Registracijos data:</span></p><input type="text" value={inputs["Registracijos data"]} onChange={(e) => formControl(e, "Registracijos data")} required />

            <p><span className="text">Rūšis:</span></p><input type="text" value={inputs["Rūšis"]} onChange={(e) => formControl(e, "Rūšis")} required />

            <p><span className="text"><label for="lytis">Lytis:</label></span></p>

                <select name="lytis" id="lytis" required>
                <option value="" disabled selected>Pasirinkite:</option>
                <option value="patinas">patinas</option>
                <option value="patelė">patelė</option>
                </select>

            <p><span className="text">Masė (kg):</span></p><input type="number" value={inputs["Masė"]} onChange={(e) => formControl(e, "Masė")} required />

            <p><span className="text">Išlaikymas per mėn. (eur):</span></p><input type="number" value={inputs["Išlaikymas per mėn."]} onChange={(e) => formControl(e, "Išlaikymas per mėn.")} required />
            </div>
            <button onClick={handleSukurti}>Patvirtinkite</button>
        </div>
        </>
    )
}