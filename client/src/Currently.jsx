import React from 'react';


class Currently extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    if (this.props.oneShoeData) {
      return (
        <div>
          <span className="home"> Home </span> &nbsp;
          <span className="currently">  > {this.props.oneShoeData[0].shoeName + " - " + this.props.oneShoeData[0].gender} </span>
        </div>
      )
    } else {
      return (
        <div>
          <span className="home"> Home </span> &nbsp;
          <span className="currently">  > {this.props.shoeData[0].shoeName + " - " + this.props.shoeData[0].gender} </span>
        </div>
      )
    }
  }
}

export default Currently;