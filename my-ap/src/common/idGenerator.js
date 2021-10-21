const idGenerator = () => {
    //einame i localStorage
    let id = localStorage.getItem('lastId')

    if (null===id) {
        id = 1;
        //įrasomas 1 į localStorage
        localStorage.setItem('lastId', id)
        return 1
    } 
    else {
        id = parseInt(id)
        id++;
        localStorage.setItem('lastId', id);
        return id;
    }
}
export default idGenerator