import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import actions from '../../store/actions/session';

class Logout extends Component {
  logout = (event) => {
    event.preventDefault();
    this.props.logout()
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="submit" className="btn btn-primary" value="退出" onClick={this.logout} />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(
  state => state.session,
  actions
)(Logout) 