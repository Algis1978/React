
export default function VienasZveris ( {vzveris}) {

    return (
        <>
        <div className="vienasZveris">
            <div className="vardas">{vzveris["Vardas"]}</div>
            <div className="invnr">Reg. nr.: {vzveris["Reg. nr."]}</div>
            <div className="atvykimodata"><span className="text">Registracijos data:</span> {vzveris["Registracijos data"].slice(0, 10)}</div>
            <div className="rusis"><span className="text">Rūšis:</span> {vzveris["Rūšis"]}</div>
            <div className="lytis"><span className="text">Lytis:</span> {vzveris["Lytis"]}</div>
            <div className="mase"><span className="text">Masė:</span> {vzveris["Masė"]} kg</div>
            <div className="islaikymas"><span className="text">Išlaikymas per mėn.:</span> {vzveris["Išlaikymo kaina eurais per mėn."]} eur</div>
        </div>
        </>
    )
}