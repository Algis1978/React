export default function Turinys ( {turinys} ) {
//Sąlyginio atvaizdavimo būdas.
    if ("S" === turinys.figura) {
        return (
            <div className="turinys">
                {turinys.skaicius.map((_, i) => <div key={i} style={{bakgroundColor:turinys.spalva, borderRadius:"50%"}}></div>)}
            </div>
        )
    }
    else if ("K" === turinys.figura) {
        return (
            <div className="turinys">
            </div>
        )
    }
    else if ("HL" === turinys.figura) {
        return (
            <div className="turinys">

            </div>
        )
    }
    else if ("VL" === turinys.figura) {
        return (
            <div className="turinys">

            </div>
        )
    } else {
        return null
    }

    return (
      <>
      <div className="turinys">
      </div>
      </>
    )
  }
  