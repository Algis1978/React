function Apskritimas ({spalva}, {tekstas}) {
    return (
    <>
    <div className="apskritimas" style={{backgroundColor:spalva}}>
        <button>{tekstas}</button>
    </div>
    </>
  )
}

export default Apskritimas

