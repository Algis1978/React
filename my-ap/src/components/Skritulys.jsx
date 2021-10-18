function Skritulys ({circleColor, circleBorder, circleNumber}) {
    return (
     <>
     <div className="circle" style={{ backgroundColor:circleColor, border:circleBorder}}>
          <span>{circleNumber}</span>
      </div>
     </>
    )
}

//Export sekcija:
export default Skritulys