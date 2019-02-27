import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" to="/counter">SSR</a>
          </div>
          <div>
            <ul className="nav navbar-nav">
              <li><Link to="/">首页</Link></li>
              <li><Link to="/counter">计算器</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a >xxx</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header