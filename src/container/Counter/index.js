import React, { Component } from 'react';
import { connect } from 'react-redux';
import counter from '../../store/actions/counter';
class Counter extends Component {
  render() {
    console.dir(this);
    return (
      <div>
        <button onClick={this.props.increment}>点我+1</button><br />
        <p>{this.props.number}</p>
      </div>
    );
  }
}


export default connect(
  state => state.counter,
  counter
)(Counter)