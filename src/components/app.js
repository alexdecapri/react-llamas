import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../components/nav_bar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class App extends Component {
  render() {
    return (
      <div className="appear">
        <NavBar />
        <ReactCSSTransitionGroup
          className="appear"
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimout={500}>
            {React.cloneElement(this.props.children, {key: this.props.location.path})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
