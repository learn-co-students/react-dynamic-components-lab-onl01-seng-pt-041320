import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const opacityValue = this.props.opacity
    return (
      <div className="color-box" style={{ opacity: opacityValue }}>
        {this.props.opacity > 0.2 ? <ColorBox opacity={opacityValue - 0.1} /> : null}
          </div>
        )
     }
}

