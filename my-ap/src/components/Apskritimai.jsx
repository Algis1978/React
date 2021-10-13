function Apskritimas ({circleColor, circleBorder, circleNumber}) {
    return (
     <>
     <div className="circle" style={{ backgroundColor:circleColor, border:circleBorder}}>
          <span>{circleNumber}</span>
        </div>
     </>
    )
}
//Export sekcija:
export default Apskritimas