import React from 'react';


const NameAndRating = (props) => {
  if (props.oneShoeData) {
    return (
      <div>
        <div className="shoeName">
          <h1 > {props.oneShoeData[0].shoeName} </h1>
        </div>

        <div id="gender">
          <span> {props.oneShoeData[0].gender} </span>
        </div>

        <div id="ratings">
          <span className='starz'> ☆☆☆☆☆ </span>
    &nbsp;<span className='ratingPercentage'> 4.0 </span>&nbsp;
          <span> {'(' + props.oneShoeData[0].rating + ')'}</span> &nbsp;&nbsp;&nbsp;&nbsp;
          <a className="reviewAndInfo" href="">Write a review </a> &nbsp;&nbsp;&nbsp;&nbsp;
          <a className="reviewAndInfo" href=""> Request info </a>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="shoeName">
          <h1 > {props.shoeData[0].shoeName} </h1>
        </div>

        <div id="gender">
          <span> {props.shoeData[0].gender} </span>
        </div>

        <div id="ratings">
          <span className='starz'> ☆☆☆☆☆ </span>
      &nbsp;<span className='ratingPercentage'> 4.0 </span>&nbsp;
          <span> {'(' + props.shoeData[0].rating + ')'}</span> &nbsp;&nbsp;&nbsp;&nbsp;
          <a className="reviewAndInfo" href="">Write a review </a> &nbsp;&nbsp;&nbsp;&nbsp;
          <a className="reviewAndInfo" href=""> Request info </a>
        </div>
      </div>
    );
  }
};

export default NameAndRating;