import React, { Component } from 'react';
import { Link } from 'react-router';

const style = {
   display: "table",
   position: "absolute",
   width: "100%",
   height: "100%",
   background: "url('/images/cover.jpg') no-repeat center",
   backgroundSize: "cover"
 };


class HomeContainer extends Component {


  render() {
    return (
      <div
        className="text-center home-container wow fadeIn"
        style={style}>
        <h1
          className="text-center">
          Welcome to React Llamas</h1>
        <div className="h3-container"><h3 className="text-center">A quick reference for all you would (n)ever need to know about these majestic animals.</h3></div>
        <Link to="facts"><button type="button" className="home-btn btn btn-primary outline">Show me some facts!</button></Link>
        <Link to="playlist"><button type="button" className="home-btn btn btn-primary outline btn-home-2">Llama expert here: I want more!</button></Link>
      </div>
    )
  }
}

export default HomeContainer;
