import React from 'react';
import { Link } from 'react-router';

function NavBar () {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand page-scroll" href="/">React Llamas</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                  <li>
                      <a href="/facts">Facts</a>
                  </li>
                  <li>
                      <a href="/playlist">Playlist</a>
                  </li>
                  <li>
                      <a href="/about">About</a>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  )
}

export default NavBar;
