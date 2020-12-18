import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py--0">
          <div className="container">
            <Link to="/" className="navbar-brand">
              Logo
            </Link>
          </div>
          <div>
            <ul className="navbar-nav mx-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  About
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
