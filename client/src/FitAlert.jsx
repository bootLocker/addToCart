import React from 'react';


const FitAlert = (props) => {//capitalized
  if (props.oneShoeData) {
    return (
      <div>
        <span className='fitAlert'> {props.oneShoeData[0].fitalert}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className='fitAlert'> {props.shoeData[0].fitalert}
        </span>
      </div>
    );
  }
};

export default FitAlert;