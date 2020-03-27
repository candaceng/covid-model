import React, { Component } from 'react';

export default class Signin extends Component {

  render() {
    const { handleSignIn } = this.props;

    return (
      <div className="panel-landing" id="section-1">
        <h1 className="landing-heading">COVID-19: Staying Informed</h1>
		<h2 className="landing-heading">A Visual Guide to Flattening the Curve</h2>
		<img src="logistic-function.png" alt="" height="300" width="450"></img>
		<h3> &nbsp; </h3>
		<h6 className="landing-heading">First, be sure to protect your identity!</h6>
        <p className="lead">
          <button
            className="btn btn-primary btn-lg"
            id="signin-button"
            onClick={ handleSignIn.bind(this) }
          >
            Sign In with Blockstack
          </button>
        </p>
      </div>
    );
  }
}
