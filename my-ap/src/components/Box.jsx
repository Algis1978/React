// function Box (props) {
//     return (
//         <div className="blackBox">
//             <span style={{ color:props.boxcolor}}>Tai Box'as, Black Box'as: {boxNumber}</span>
//         </div>
//     )
// }

// style={{letter-spacing:"4px", box-shadow: "4px 8px 4px blue"}};

function Box ({boxColor, boxNumber, ls}) {
    return (
     <>
     <div className="blackBox">
          <span style={{ 
              letterSpacing: ls, 
              color:boxColor}
              }>Tai Box'as, Black Box'as: {boxNumber}</span>
        </div>
     </>
    )
}
export default Box;