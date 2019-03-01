import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return (
      this.props.user ?
        (<div className="row">
          <div className="col-md-6 col-md-offset-3">
            个人中心
        </div>
        </div>) :
        <Redirect to="/login" />
    )
  }
}

export default connect(
  state => state.session
)(Profile)