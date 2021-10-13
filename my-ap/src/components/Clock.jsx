import { Component } from 'react'

class Clock extends Component {
    constructor(props) {
        //išsikviečiamas tėvinio elemento konstruktoriaus funkcija.
        super();
        //nurodomas 'steitas'
        this.state =({
            clock: new Date().toLocaleTimeString(),
            color: '#' + Math.floor(Math.random()*16777215).toString(16)
        })
    }
    componentDidMount() {
        //console.log("Go Away!!!")
        setInterval(
            //vraperis () reikalingas, kad funkcija this.tick pasileistų su setInterval
            ()=>this.tick(), 1000
        );
    }
    tick () {
        //console.log("tik-tik")
        //this.setState reikalingas React'ui suprasti, kad steitas pasikeitė
        this.setState(
            {clock: new Date().toLocaleTimeString}
            );
    }
    click () { //arba paversti rodykline funkcija vietoj vraperio tolimesniame kode click = () => {}, yra dar b8das su 'bind'
        //console.log("tik-tik")
        //this.setState reikalingas React'ui suprasti, kad steitas pasikeitė
        this.setState(
            {clock: new Date().toLocaleTimeString}
            );
    }
    render() {
        // render funkcija grąžina HTML kodą su steitu:
       return (
           <>
        <h1>{this.state.clock}</h1>
        <button onClick={()=>this.click}>Spauskite čia</button>
        </>
        //
        ) 

    }
    // (return
    //    <div><h1>{clockTime}</h1></div> 
    //    )
}

export default Clock

//Reikia sukurti 10 įvairių random spalvų apskritimus. Tada paspaudus pelike ant to apskritimo jis turi pradingti. Viršuje turi būti skaitiklis, kuris skaičiuotų susprogdintus balionus (apskritimus). Pradžioje jis turi rodyti 0