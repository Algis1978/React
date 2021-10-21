function FieldAnimal({ fieldAnimal, field, trinti}) {


    if (field === fieldAnimal.field&&'cow' === fieldAnimal.animal) {
        return (
            <div className="cow" onClick={()=> trinti(fieldAnimal.id)}>
                <div className="number" >{fieldAnimal.id}</div>
            </div>
        );
    }
    else if (field === fieldAnimal.field&&'sheep' === fieldAnimal.animal) {
        return (
            <div className="sheep" onClick={()=> trinti(fieldAnimal.id)}>
                <div className="number">{fieldAnimal.id}</div>
            </div>
        );
    }
    else if (field === fieldAnimal.field&&'chicken' === fieldAnimal.animal) {
        return (
            <div className="chicken" onClick={()=> trinti(fieldAnimal.id)}>
                <div className="number">{fieldAnimal.id}</div>
            </div>
        );
    }
    else {
        return null;
    }

}

export default FieldAnimal;