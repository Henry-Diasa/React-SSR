import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" to="/">SSR</a>
          </div>
          <div>
            <ul className="nav navbar-nav">
              <li><Link to="/">首页</Link></li>
              <li><Link to="/counter">计算器</Link></li>
              {this.props.user ?
                <Fragment>
                  <li><Link to="/logout">退出</Link></li>
                  <li><Link to="/profile">个人中心</Link></li>
                </Fragment>
                : <li><Link to="/login">登录</Link></li>
              }

            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>{this.props.user ? this.props.user.username : <Link to="/login">登录</Link>}</li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}


export default connect(
  state => state.session
)(Header)




/* 
  这边的逻辑是这样的
  如果没有登录显示登录, 如果登录了显示退出 和 个人中心

  右侧如果登录了显示用户名
  如果没有登录提示去登录
*/