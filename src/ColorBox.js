import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    // const parsedOpacity = parseFloat(this.props.opacity).toFixed(1);
    // const newOpacity = parsedOpacity - 0.1
    if (this.props.opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      )  
    } else {
        return null
    }
    
      
  }

}

// const newValue = this.props.value * 2;
//     return this.props.value > 100 ? null : ( <div>
//         <Example value={newValue} />
//       </div>)