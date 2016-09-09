import React, { Component } from 'react';

class BGImageWrapper extends Component {
  render() {
    return (
      <div className="bg">
        {this.props.children}
      </div>
    )
  }
}

export default BGImageWrapper;
