import React, { Component, Fragment } from 'react';

class Login extends Component {
  /*  */
  componentWillMount() {
    if (this.props.staticContext) {
      this.props.staticContext.notFound = true
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <div>Not Found</div>
        </div>
      </div>
    )
  }
}
export default Login