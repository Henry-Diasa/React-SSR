import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class Logout extends Component {

  render() {

    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" value="退出" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Logout