import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet'
import home from '../../store/actions/home';
class Home extends Component {
  state = { name: 'home' }

  componentDidMount() {
    if (this.props.list.length == 0) {
      this.props.getHomeList()
    }
  }

  /*   static getDerivedStateFromProps(nextProps, prevState, c3, c4) {
      console.dir(nextProps);
      console.dir(prevState);
      console.log('getDerivedStateFromProps');
      console.dir(c3);
      console.dir(c4);
      nextProps.getHomeList()
      return null
    } */
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>首页标题</title>
          <meta name="description" content="首页描述" />
        </Helmet>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <ul className="list-group">
              {
                this.props.list.map(item => (
                  <li key={item.id} className="list-group-item">{item.name}</li>
                ))
              }
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

/* 这边有一个难点, 有一个最难的点 */

Home = connect(
  state => state.home,
  home
)(Home)

Home.loadData = function (store) {
  // dispatch 返回的就是一个 aciton 本身.
  // 这边 return 回去就是 一个 promise !!! 这是一个 关键的 难点. 也是一个关键点.
  return store.dispatch(home.getHomeList())
}

export default Home