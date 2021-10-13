const Mygtukas = () => {
    const kvadratas = document.createElement("div");
    const mygtukas = document.createElement("button");
    const mygtukoTekstas = document.createTextNode("Spauskite čia");
    kvadratas.appendChild(mygtukas);
    mygtukas.appendChild(mygtukoTekstas);
    //document.querySelector("#root");
    //root.appendChild(kvadratas);
}

export default Mygtukas