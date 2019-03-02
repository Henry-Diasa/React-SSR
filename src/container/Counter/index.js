import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet'
import counter from '../../store/actions/counter';

class Counter extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>计算器</title>
          <meta name="description" content="计算器页描述" />
        </Helmet>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <button onClick={this.props.increment}>点我+1</button><br />
            <p>{this.props.number}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  state => state.counter,
  counter
)(Counter)