import React from 'react';
import axios from 'axios';
import MainShoe from './MainShoe.jsx';
import Colorways from './Colorways.jsx';
import Currently from './Currently.jsx';
import Details from './Details.jsx';
import NameAndRating from './NameAndRating.jsx';
import ShoeSizes from './ShoeSizes.jsx';
import Promo from './Promo.jsx';
import FitAlert from './FitAlert.jsx';
import FindStore from './FindStore.jsx';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoeData: [],
      oneShoeData: {}
    };
    this.getData = this.getData.bind(this);
    this.getShoe = this.getShoe.bind(this);
  }


  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/api/products/')
      .then((results) => {
        console.log(results.data);
        this.setState({
          shoeData: results.data
        }, () => console.log(this.state.shoeData));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getShoe(shoe) {
    this.setState({
      oneShoeData: shoe
    }, () => console.log('newshoestate', this.state.oneShoeData));
  }


  // add conditional if this.state.oneshoedata.size is valid then pass that it in as props to each component and add conditionals to those to see if this.props.oneshoedata is true and adjust each index

  render() {
    if (this.state.oneShoeData && this.state.oneShoeData.length > 0) {
      return (
        <div id='headDiv'>
          <Currently oneShoeData={this.state.oneShoeData} />

          <div className='mainComponentDiv'>
            <MainShoe oneShoeData={this.state.oneShoeData} />

            <div id='rightPortion'>
              <NameAndRating oneShoeData={this.state.oneShoeData} />
              <Colorways getShoe={this.getShoe} shoeData={this.state.shoeData}/>
              <Details oneShoeData={this.state.oneShoeData} />
              <ShoeSizes shoeData={this.state.shoeData} />
              <Promo />
              <FitAlert oneShoeData={this.state.oneShoeData} />
              <div>
                <button className="addToCartBtn"> Add To Cart </button>
              </div>
              <FindStore />
            </div>
          </div>
        </div>
      );
    }
    if (this.state.shoeData && this.state.shoeData.length > 0) {
      return (
        <div id='headDiv' className='test'>
          <Currently shoeData={this.state.shoeData} />

          <div className='mainComponentDiv'>
            <MainShoe shoeData={this.state.shoeData} />

            <div id='rightPortion'>
              <NameAndRating shoeData={this.state.shoeData} />
              <Colorways getShoe={this.getShoe} shoeData={this.state.shoeData} />
              <Details shoeData={this.state.shoeData} />
              <ShoeSizes shoeData={this.state.shoeData} />
              <Promo />
              <FitAlert shoeData={this.state.shoeData} />
              <div>
                <button className="addToCartBtn"> Add To Cart </button>
              </div>
              <FindStore />
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