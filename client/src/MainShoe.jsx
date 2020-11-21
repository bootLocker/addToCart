import React from 'react';


class MainShoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
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
                  <img src={shoe} />
                </div>
              );
            })}
          </div>
        </div>
      )
    }
    if (this.props.shoeData && this.props.shoeData.length > 0) {
      return (
        <div>
          <div className="mainShoeDiv" >
            <div className='mainShoeImg'>
              <img src={this.props.shoeData[0].currentShoeBigPictures[0]} />
            </div>
          </div>
          <div className="mainShoeAlternateImgs">
            {this.props.shoeData[0].currentShoeSmallPictures.map((shoe, index) => {
              return (
                <div className='indivAltMainShoeImg'>
                  <img src={shoe} />
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