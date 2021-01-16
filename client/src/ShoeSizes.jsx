import React from 'react';


class ShoeSizes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="shoeSizes">
        {this.props.shoeData[3].size.map((size, index) => {
          return (
            <div className="size" key={index}>
              {size}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ShoeSizes;