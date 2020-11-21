import React from 'react';


const FitAlert = (props) => {
  if (props.oneShoeData) {
    return (
      <div>
        <span className='fitAlert'> {props.oneShoeData[0].fitAlert}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className='fitAlert'> {props.shoeData[0].fitAlert}
        </span>
      </div>
    );
  }
};

export default FitAlert;