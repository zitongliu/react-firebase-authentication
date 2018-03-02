import React from 'react';
import SignInForm from './SignInForm';

export default class SignInPage extends React.Component {

  render() {
    return (
      <div className="sign-in-page">
        <h2>Sign In</h2>
        <SignInForm />
      </div>
    );
  }
}
