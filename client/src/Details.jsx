import React from 'react';


const Details = (props) => {
  return (
    <div>
      <div id="altText">
        <div name='colorway'>
          <p> {props.shoeData[0].colorway} </p>
        </div>
        <div name='fit'>
          <p> {props.shoeData[0].fit} </p>
        </div>
      </div>
      <div name='price/sizeChart'>
        <span className='price'> {props.shoeData[0].price} </span>&nbsp;&nbsp;&nbsp;&nbsp;
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
        <span> 4 interest-free payments of ${Number.parseInt(props.shoeData[0].price.slice(1) / 4, 10)}. <b>Klarna.</b> </span>
        <br />
        <span className='learnMorePayments'> Learn more </span>
      </div>
    </div>
  );
};


export default Details;