import React, { Component } from 'react';

function withStyle(Component, styles) {
  class WrapComponent extends Component {

    componentWillMount() {
      if (this.props.staticContext) {
        this.props.staticContext.csses.push(styles._getCss())
      }
    }

    render() {
      return (
        <Component {...this.props}/>
      );
    }
  }

  return WrapComponent
}

export default withStyle