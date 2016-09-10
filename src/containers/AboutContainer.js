import React, { Component } from 'react';

const style = {
  marginTop: "80px"
};

class AboutContainer extends Component {
  render() {
    return (
      <div>
        <h2
          style={style}
          className="text-center">
          About This Website
        </h2>
        <h4 className="text-center facts-subheader">I made this site for Zappos in the high hopes of becoming a web development intern this coming summer.  Some of the technologies used below include:</h4>
        <ul className="about-bullets text-center">
          <li>React, React-Router, and ReactDOM</li>
          <li>Node</li>
          <li>Webpack</li>
          <li>Babel</li>
          <li>Bootstrap</li>
          <li>Custom Google Fonts</li>
          <li>Axios</li>
          <li>and of course HTML5 and CSS3</li>
        </ul>
        <h5 className="text-center github-comment">Find the code on <a href="https://www.github.com/alexdecapri/react-llamas">Github</a>.</h5>
      </div>
    )
  }
}

export default AboutContainer;
