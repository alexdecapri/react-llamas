import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../components/nav_bar';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ReactCSSTransitionGroup
          transitionName="appear"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
            {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
