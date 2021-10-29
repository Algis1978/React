import {useState} from "react";

export default function ZverisSukurti ( {sukurti} ) {

    const [vertes, setVertes] = useState(
        {Vardas: "", "Registracijos data": "", Rūšis: "", Masė: 0, "Išlaikymas per mėn.": ""})

    const formControl = (e, what) => {
        const vertesCopy = {...vertes};
        vertesCopy[what] = e.target.value;
        setVertes (vertesCopy);
    }

    const handleSukurti = () => {
        sukurti(vertes);
    }
    return (
        <>
        <form className="zverissukurti">
            <h2>Įveskite naują žvėrį:</h2>
            <div className="menu">
            <p><span className="text">Vardas:</span></p><input type="text" value={vertes["Vardas"]} onChange={(e) => formControl(e, "Vardas")} required />
            <p><span className="text">Registracijos data:</span></p><input type="text" value={vertes["Registracijos_data"]} onChange={(e) => formControl(e, "Registracijos_data")} required />

            <p><span className="text">Rūšis:</span></p><input type="text" value={vertes["Rūšis"]} onChange={(e) => formControl(e, "Rūšis")} required />

            <p><span className="text"><label for="lytis">Lytis:</label></span></p>

                <select name="lytis" id="lytis">
                <option value="" disabled selected>Pasirinkite:</option>
                <option value="patinas">patinas</option>
                <option value="patelė">patelė</option>
                </select>

            <p><span className="text">Masė (kg):</span></p><input type="number" value={vertes["Masė"]} onChange={(e) => formControl(e, "Masė")} required />

            <p><span className="text">Išlaikymas per mėn. (eur):</span></p><input type="number" value={vertes["Išlaikymo_kaina_eurais_per_mėn"]} onChange={(e) => formControl(e, "Išlaikymo_kaina_eurais_per_mėn")} required />
            </div>
            <button onClick={handleSukurti}>Patvirtinkite</button>
        </form>
        </>
    )
}