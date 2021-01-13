import React from 'react';
import axios from 'axios';



class MainShoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedImage: '',
      soloClickedImage: '',
      clicked: false
    };
    this.alternateViewClickAllShoeData = this.alternateViewClickAllShoeData.bind(this);
    this.alternateViewClickOneShoe = this.alternateViewClickOneShoe.bind(this);
  }


  alternateViewClickAllShoeData(e) {
    // console.log(typeof e.currentTarget.id);
    let image = '';
    if (e.currentTarget.id === '0') {
      image = this.props.shoeData[0].currentShoeBigPictures[0];
    } else if (e.currentTarget.id === '1') {
      image = this.props.shoeData[0].currentShoeBigPictures[1];
    } else if (e.currentTarget.id === '2') {
      image = this.props.shoeData[0].currentShoeBigPictures[2];
    } else if (e.currentTarget.id === '3') {
      image = this.props.shoeData[0].currentShoeBigPictures[3];
    } else {
      image = this.props.shoeData[0].currentShoeBigPictures[4];
    }
    // console.log(image);

    this.setState({
      clickedImage: image,
      clicked: true
    });
  }


  alternateViewClickOneShoe(e) {
    console.log(e.currentTarget.id);
    let image = '';
    if (e.currentTarget.id === '0') {
      image = this.props.oneShoeData[0].currentShoeBigPictures[0];
    } else {
      image = this.props.oneShoeData[0].currentShoeBigPictures[1];
    }
    this.setState({
      soloClickedImage: image
    });
  }

  // toggleClass(e) {
  //   console.log(e.target);
  // }


  render() {
    if (this.props.oneShoeData && this.state.soloClickedImage !== '') {
      return (
        <div>
          <div className="mainShoeDiv" >
            <div className='mainShoeImg'>
              <img src={this.state.soloClickedImage} />
            </div>
          </div>
          <div className="mainShoeAlternateImgs">
            {this.props.oneShoeData[0].currentShoeSmallPictures.map((shoe, index) => {
              return (
                <div className='indivAltMainShoeImg'>
                  <img
                    id={index} onClick={this.alternateViewClickOneShoe} src={shoe} />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    if (this.props.shoeData && this.props.shoeData.length > 0 && this.state.clickedImage !== '') {
      return (
        <div>
          <div className="mainShoeDiv" >
            <div className='mainShoeImg'>
              <img src={this.state.clickedImage} />
            </div>
          </div>
          <div className="mainShoeAlternateImgs">
            {this.props.shoeData[0].currentShoeSmallPictures.map((shoe, index) => {
              return (
                <div className='indivAltMainShoeImg'>
                  <img id={index} onClick={this.alternateViewClickAllShoeData} src={shoe} />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    if (this.props.oneShoeData) {
      return (
        <div>
          <div className="mainShoeDiv" >
            <div className='mainShoeImg'>
              <img src={this.props.oneShoeData[0].currentShoeBigPictures[0]} />
            </div>
          </div>
          <div className="mainShoeAlternateImgs">
            {this.props.oneShoeData[0].currentShoeSmallPictures.map((shoe, index) => {
              return (
                <div className='indivAltMainShoeImg'>
                  <img
                    id={index} onClick={this.alternateViewClickOneShoe} src={shoe} />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    if (this.props.shoeData && this.props.shoeData.length > 0) {
      return (
        <div className='mainShoeDivWithAltImages'>
          <div className="mainShoeDiv" >
            <div className='mainShoeImg'>
              <img src={this.props.shoeData[0].currentShoeBigPictures[0]} />
            </div>
          </div>
          <div className="mainShoeAlternateImgs">
            {this.props.shoeData[0].currentShoeSmallPictures.map((shoe, index) => {
              return (
                <div className='indivAltMainShoeImg'>
                  <img id={index} onClick={this.alternateViewClickAllShoeData} src={shoe} />
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default MainShoe;


