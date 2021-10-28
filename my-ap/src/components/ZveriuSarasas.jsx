import VienasZveris from "./VienasZveris" 
export default function ZveriuSarasas ( {visizverys} ) {

    return (
        <>
        <div className="zveriuSarasas">
            {visizverys.map(z => <VienasZveris key={z["Inv. Nr."]} vzveris = {z}></VienasZveris>)}
        </div>
        </>
    )
}