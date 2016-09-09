import React, { Component } from 'react';
import { Link } from 'react-router';

class HomeContainer extends Component {
  render() {
    return (
      <div className="home">
      <div className="text-center">
        <h1 className="text-center">Welcome to React Llamas</h1>
        <h3>A quick reference for all you would (n)ever need to know about these majestic animals.</h3>
        <Link to="facts"><button className="btn btn-primary">Show me some facts!</button></Link>
        <Link to="playlist"><button className="btn btn-primary">I'm already a llama expert- what else ya got?</button></Link>
      </div>
      </div>
    )
  }
}

export default HomeContainer;
