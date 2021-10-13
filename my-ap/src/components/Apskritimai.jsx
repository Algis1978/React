function Apskritimas ({circleColor, circleBorder, circleNumber}) {
    return (
     <>
     <div className="circleGrid">
     <div className="circle" style={{ backgroundColor:circleColor, border:circleBorder}}>
          <span>{circleNumber}</span>
        </div>
      </div>
     </>
    )
}

//Export sekcija:
export default Apskritimas