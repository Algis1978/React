import { useState } from "react";

function VienasGyvunas ({ fieldAnimal, trinti, addWeight }) {

    const [weight, setWeight] = useState('');

    const handleWeight = e => {
        setsvoris(e.target.value);
    }

    const submitWeight = () => {
        addWeight(fieldAnimal.id, weight)
        setWeight('');
    }
    return (
        <>
            <h2>No.:{fieldAnimal.id} svoris: {fieldAnimal.svoris}</h2>
            <input type="text" onChange={handleWeight} value={svoris} />
            <button onClick={submitWeight}>Pridėti</button>
            <button onClick={() => trinti (fieldAnimal.id)}>Trinti</button>
        </>
    );

}

export default VienasGyvunas;