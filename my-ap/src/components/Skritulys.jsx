function Skritulys ({circleColor, circleBorder, circleNumber}) {
    return (
     <>
     <div className="circle" style={{ backgroundColor:circleColor, border:circleBorder}}>
          <div>{circleNumber}</div>
      </div>
     </>
    )
}

//Export sekcija:
export default Skritulys