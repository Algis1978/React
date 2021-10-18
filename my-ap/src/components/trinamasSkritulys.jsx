import { Component } from "react";

class trinamasSkritulys extends Component {
    constructor({circleColor, circleBorder, circleNumber}) {
      super();
      this.circleColor=circleColor;
      this.circleBorder=circleBorder;
      this.circleNumber=circleNumber;
      this.state = {
        display: "inline-flex",
      };
    }
    componentDidMount() {
 
    }
    changeApp = () => {
      this.setState({display: "none"});
    }
    render() {
      return (
        <>
   <div onClick={this.changeApp} className="circle" style={{ backgroundColor:this.circleColor, border:this.circleBorder}}>
          <div>{this.circleNumber}</div>
      </div>
     </>
      );
    }
  }