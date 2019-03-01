import React, { Component } from 'react';
import { connect } from 'react-redux';
import counter from '../../store/actions/counter';
class Counter extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <button onClick={this.props.increment}>点我+1</button><br />
          <p>{this.props.number}</p>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.counter,
  counter
)(Counter)