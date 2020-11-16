import React from 'react';
import axios from 'axios';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoeData: []
    };
    this.getData = this.getData.bind(this);
  }


  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/products/')
      .then((results) => {
        // console.log(results.data[3])
        this.setState({
          shoeData: results.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }


  render() {
    // if
    // console.log(this.state.shoeData)
    if (this.state.shoeData && this.state.shoeData.length > 0) {
      return (
        <div>
          <h1> {this.state.shoeData[3].shoeName} </h1>
          <span> {this.state.shoeData[3].gender} </span>
        </div>
      );
    } else {
      return (
        <div>
          <h1> hi </h1>
        </div>
      );
    }
  }
}

export default Home;