import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const parsedOpacity = parseFloat(this.props.opacity).toFixed(1);
    const newOpacity = parsedOpacity - 0.1
    if (parsedOpacity >= 0.2) {
      this.render()
      return (
        <div className="color-box" style={{opacity: newOpacity /*replace null with the value*/}}>
          <ColorBox opacity={newOpacity} />
        </div>
      )  
    } else if (parsedOpacity < 0.2) {
      this.render() === null
    }
    
      
  }

}

// const newValue = this.props.value * 2;
//     return this.props.value > 100 ? null : ( <div>
//         <Example value={newValue} />
//       </div>)