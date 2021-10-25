const idGenerator = () => {
    //einame į localStorage ir paimamas skaičius iš rodiklio 'lastId'
    let id = localStorage.getItem('lastId')
    //Jei tokio rodiklio nėr jis įrašomas į localStorage esant vienetu
    if (id==null) {
        //įrasomas 1 į localStorage
        localStorage.setItem('lastId', 1)
        return 1
    }
    //kitu atveju rodiklis verčiamas į skaičių ir localStorage įrašomas vienetu didesnis 'lastId'
    else {
        id = parseInt(id)
        id++;
        localStorage.setItem('lastId', id);
        return id;
    }
}
export default idGenerator