import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <ul className="list-group">
            {
              this.props.list.map(item => (
                <li key={item.id} className="list-group-item">{item.name}</li>
              ))
            }
          </ul>
          <div>33333</div>
        </div>
      </div>
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