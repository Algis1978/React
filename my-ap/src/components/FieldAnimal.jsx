
export default FieldAnimal ( {fieldAnimal}) {

    if ('cow' === fieldAnimal.animal) {
        return (
            <div className="cow">

            </div>
        )
    }
    else if ('sheep' === fieldAnimal.animal) {
        return (
            <div className="sheep">

            </div>
        )
    }
    else if ('chicken' === fieldAnimal.animal) {
        return (
            <div className="chicken">

            </div>
        )
    }
    else {return null}
}