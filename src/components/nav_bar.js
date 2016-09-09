import React from 'react';
import { Link } from 'react-router';
// import { Navbar, Nav, NavItem } from 'react-bootstrap/lib';


// var styles = {
//   position: {
//     float: "right"
//   },
//   block: {
//     display: "inline-block",
//     margin: "15px 15px 0 0"
//   }
// }

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

/*
<nav className="navbar navbar-default navbar-fixed-top">
  <div className="container-fluid">
      <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">Alex DeCapri</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
              <li>
                  <a className="page-scroll" href="#about">About</a>
              </li>
              <li>
                  <a className="page-scroll" href="#services">Skills</a>
              </li>
              <li>
                  <a className="page-scroll" href="#portfolio">Portfolio</a>
              </li>
              <li>
                  <a className="page-scroll" href="#contact">Contact</a>
              </li>
          </ul>
      </div>
  </div>
</nav>
*/

/*
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#">React Llamas</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">Facts</NavItem>
    <NavItem eventKey={2} href="#">Playlist</NavItem>
    <NavItem eventKey={3} href="#">About</NavItem>
  </Nav>
</Navbar>
*/
