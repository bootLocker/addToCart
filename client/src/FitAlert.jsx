import React from 'react';


const FitAlert = (props) => {
  return (
    <div>
      <span className='fitAlert'> {props.shoeData[0].fitAlert}
      </span>
    </div>
  );
};

export default FitAlert;