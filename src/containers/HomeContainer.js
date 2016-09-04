import React, { Component } from 'react';

class HomeContainer extends Component {
  render() {
    return (
      <div className="text-center">
        <h1 className="text-center">Welcome to React Llamas</h1>
        <h3>A quick reference for all you would (n)ever need to know about these majestic animals.</h3>
        <button className="btn btn-primary">Show me some facts!</button>
        <button className="btn btn-primary">I'm already a llama expert- what else ya got?</button>
      </div>
    )
  }
}

export default HomeContainer;
