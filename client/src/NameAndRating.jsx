import React from 'react';


const NameAndRating = (props) => {
  if (props.oneShoeData) {
    return (
      <div>
        <div className="shoeName1">
          <h1 > {props.oneShoeData[0].shoename} </h1>
        </div>

        <div id="gender1">
          <span> {props.oneShoeData[0].gender} </span>
        </div>

        <div id="ratings1">
          <span className='starz1'> ★★★★☆ </span>
    &nbsp;<span className='ratingPercentage1'> 4.0 </span>&nbsp;
          <span> {'(' + props.oneShoeData[0].rating + ')'}</span> &nbsp;&nbsp;&nbsp;&nbsp;
          <a className="reviewAndInfo" href="">Write a review </a> &nbsp;&nbsp;&nbsp;&nbsp;
          <a className="reviewAndInfo" href=""> Request info </a>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="shoeName1">
          <h1 > {props.shoeData[0].shoename} </h1>
        </div>

        <div id="gender1">
          <span> {props.shoeData[0].gender} </span>
        </div>

        <div id="ratings1">
          <span className='starz1'> ★★★★☆ </span>
      &nbsp;<span className='ratingPercentage1'> 4.0 </span>&nbsp;
          <span> {'(' + props.shoeData[0].rating + ')'}</span> &nbsp;&nbsp;&nbsp;&nbsp;
          <a className="reviewAndInfo" href="">Write a review </a> &nbsp;&nbsp;&nbsp;&nbsp;
          <a className="reviewAndInfo" href=""> Request info </a>
        </div>
      </div>
    );
  }
};

export default NameAndRating;