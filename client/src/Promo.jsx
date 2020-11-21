import React from 'react';

const Promo = (props) => {
  return (
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
  );
};

export default Promo;