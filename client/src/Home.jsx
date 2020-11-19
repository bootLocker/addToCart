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
    console.log(this.state.shoeData[3]);
    if (this.state.shoeData && this.state.shoeData.length > 0) {
      return (
        <div id='headDiv'>
          <div>
            <span className="home"> Home </span> &nbsp;
            <span className="currently">  > {this.state.shoeData[3].shoeName + " - " + this.state.shoeData[3].gender} </span>
          </div>

          <div className='mainComponentDiv'>

            <div id='leftPortion'>
              <div className="mainShoeDiv">
                {/* using other color ways image because it is bigger/better qual */}
                <div className='mainShoeImg'>
                  <img src='https://images.footlocker.com/is/image/EBFL2/FU7385_a1?wid=630&hei=630&fmt=png-alpha' />
                  {/* <img src={this.state.shoeData[3].otherColorWays[0]} /> */}
                </div>
              </div>
              <div className="mainShoeAlternateImgs">
                {this.state.shoeData[3].currentShoePictures.map((shoe, index) => {
                  return (
                    <div className='indivAltMainShoeImg'>
                      <img src={shoe} />
                    </div>
                  );
                })}
              </div>
            </div>

            <div id='rightPortion'>
              <div className="shoeName">
                <h1 > {this.state.shoeData[3].shoeName} </h1>
              </div>
              <div id="gender">
                <span> {this.state.shoeData[3].gender} </span>
              </div>

              <div id="ratings">
                <span className='starz'> ☆☆☆☆☆ </span>
                &nbsp;<span className='ratingPercentage'> 4.0 </span>&nbsp;
                <span> {'(' + this.state.shoeData[3].rating + ')'}</span> &nbsp;&nbsp;&nbsp;&nbsp;
                <a className="reviewAndInfo" href="">Write a review </a> &nbsp;&nbsp;&nbsp;&nbsp;
                <a className="reviewAndInfo" href=""> Request info </a>
              </div>
              <div id="otherColorwaysImgs">
                {this.state.shoeData[3].otherColorWays.map((shoe, index) => {
                  return (
                    <div className="otherShoesBackground">
                      <img className='otherShoesImage' src={shoe} />
                    </div>
                  );
                })}
              </div>
              <div id="altText">
                <div name='colorway'>
                  <p> {this.state.shoeData[3].colorway} </p>
                </div>
                <div name='fit'>
                  <p> {this.state.shoeData[3].fit} </p>
                </div>
              </div>
              <div name='price/sizeChart'>
                <span className='price'> {this.state.shoeData[3].price} </span>&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a className='sizeChart' href="">Size Chart </a>
              </div>
              <div className='makePayments'>
                <span> 4 interest-free payments of ${Number.parseInt(this.state.shoeData[3].price.slice(1) / 4, 10)}. <b>Klarna.</b> </span>
                <br />
                <span className='learnMorePayments'> Learn more </span>
              </div>

              <div id="shoeSizes">
                {this.state.shoeData[3].size.map((size, index) => {
                  return (
                    <div className="size" key={index}>
                      {size}
                    </div>
                  );
                })}
              </div>

              <div id="flxPromo">
                <div className='flxLogo'>
                  <img src="https://www.footlocker.com/content/dam/flincfoundation/loyalty/flx_logo.svg" />
                </div>
                <div className='learnShipping'>
                  <span className='freeShipping'> <b> MEMBERS GET FREE SHIPPING  </b> </span>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className='learnMore'> Learn more </span>
                </div>
              </div>

              <div>
                <span className='fitAlert'> {this.state.shoeData[3].fitAlert}
                </span>
              </div>

              <div>
                <button className="addToCartBtn"> Add To Cart </button>
              </div>

              <div id="findStorePickup">
                <img className='mapLogo' src="https://i.ibb.co/HzDNWLf/icon.png" alt="icon" border="0" />
                <div className='pickStore'>
                  <p className='pickUp'>BUY & PICK UP IN STORE</p>
                  <span className='findStore'>Find a store near me</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1> Loading.. </h1>
        </div>
      );
    }
  }
}

export default Home;