// class div {
//     constructor (selector, data) {
//         console.log ("mainForm Object Go!");
//         console.log (data);
//         this.selector = selector;
//         this.data = data;
//         this.render();
//     }
// }
// render () {
//     let HTML = "";
//     for ( let i = 0; i<this.data.length; i++ ) {
//     const item = this.data[i];
//     console.log (item);
    
//          HTML +=`<div id="myDiv">
//                 </div>`
//     }
//     this.DOM.innerHTML += HTML;
// }
const Div = (t) => {
const div = document.createElement('div');
const text = document.createTextNode (t);
div.appendChild(text);
document.querySelector("#root");
root.appendChild(div);
}

// Div("Go Away!!!");
// Div("No way!!!");

const data = ["Go Away!!!", "No way!!!", "OK, me tooo", "This is the right place"];

for (let i = 0; i<data.length; i++) {
    Div(data[i])
}

data.forEach(s=>Div(s));

//Galima parinkti skirtingus elementus šablone:
const Elem = (t, el) => {
    const div = document.createElement(el);
    const text = document.createTextNode (t);
    div.appendChild(text);
    document.querySelector("#root");
    root.appendChild(div);
    }

    Elem("Bla Bla Bla", "h3");

    //CSS klasės priskyrimas:
    const ElemK = (t, el, className) => {
        const div = document.createElement(el);
        const text = document.createTextNode (t);
        div.appendChild(text);
        document.querySelector("#root");
        root.appendChild(div);
        div.classList.add(className);
        }
    
        ElemK("Whoooo----oooohW", "h3", "cadetblue");
        ElemK("Yeahhh----hhhaeY", "h3", "cornsilk");

        data.forEach((s, nr) => ElemK(s, "h4", nr%2===0 ? "cadetblue":"cornsilk"))
        ElemK("KVA KVA KVA", "h1", "cornsilk")

        let state = 0;

        const setState = (def=true) =>{ 
            if (def){state=0;}
            else {state++};}
            setState(true);
        document.querySelector("button").addEventListener(click, () => {setState();})

        setState(true);