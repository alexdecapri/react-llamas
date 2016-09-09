import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../components/nav_bar';


export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
          {this.props.children}
      </div>
    );
  }
}
