import React from 'react';
import axios from 'axios';
import Home from './Home.jsx';


class Colorways extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      id: '',
      _id: '',
      newShoe: []
    };
    this.selectShoeColor = this.selectShoeColor.bind(this);
    this.get = this.get.bind(this);
    // this.getNewShoeData = this.getNewShoeData.bind(this);
  }

  // componentDidMount() {
  //   this.getNewShoeData();
  // }



  selectShoeColor(e) {
    console.log(e.currentTarget.name)
    this.setState({
      id: e.target.id,
      clicked: !this.state.clicked,
      _id: e.currentTarget.name
    }, () => this.get());
  }

  get() {
    axios.get(`api/products/${this.state._id}`)
      .then((results) => {
        this.setState({
          newShoe: results.data
        }, () => this.props.getShoe(this.state.newShoe));
      })
      .catch((err) => {
        console.log('failed');
      });
  }

  render() {
    if (this.props.shoeData && this.props.shoeData.length > 0 && this.state.clicked) {//capitalized colorways
      return (
        <div id="otherColorwaysImgs">
          {this.props.shoeData[0].othercolorways.map((shoe, index) => {
            return (
              <img id={index} name={index === 0 ? this.props.shoeData[0]._id : index === 1 ? this.props.shoeData[1]._id : index === 2 ? this.props.shoeData[2]._id : this.props.shoeData[3]._id} onClick={this.selectShoeColor} className={index === parseInt(this.state.id) ? 'otherShoesBackgroundClicked' : 'otherShoesBackground'} src={shoe} />
            );
          })}
        </div>
      );
    }
    if (this.props.shoeData && this.props.shoeData.length > 0) {
      return (
        <div id="otherColorwaysImgs">
          {this.props.shoeData[0].othercolorways.map((shoe, index) => {
            return (
              <img id={index} name={index === 0 ? this.props.shoeData[0]._id : index === 1 ? this.props.shoeData[1]._id : index === 2 ? this.props.shoeData[2]._id : this.props.shoeData[3]._id} onClick={this.selectShoeColor} className='otherShoesBackground' src={shoe} />
            );
          })}
        </div>
      );
    }
  }
}


export default Colorways;