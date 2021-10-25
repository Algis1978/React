function FieldAnimal({ fieldAnimal, field, trinti} ) {


    if (field === fieldAnimal.field&&'cow' === fieldAnimal.animal) {
        return (
            <div className="cow" onClick={()=> trinti(fieldAnimal.id)}>
                <p className="number" >id: {fieldAnimal.id}</p>
                <p><input type="number" className="input" /> kg</p>
                <button className="button4">Įveskite svorį</button>
            </div>
        );
    }
    else if (field === fieldAnimal.field&&'sheep' === fieldAnimal.animal) {
        return (
            <div className="sheep" onClick={()=> trinti(fieldAnimal.id)}>
                <div className="number">Id: {fieldAnimal.id}</div>
                <p><input type="number" className="input" /> kg</p>
                <button className="button4">Įveskite svorį</button>
            </div>
        );
    }
    else if (field === fieldAnimal.field&&'chicken' === fieldAnimal.animal) {
        return (
            <div className="chicken" onClick={()=> trinti(fieldAnimal.id)}>
                <div className="number">Id: {fieldAnimal.id}</div>
                <p><input type="number" className="input" /> kg</p>
                <button className="button4">Įveskite svorį</button>
            </div>
        );
    }
    else {
        return null;
    }

}

export default FieldAnimal;