import React from 'react';
import SignUpForm from './SignUpForm';

export default class SignUpPage extends React.Component {

  render() {
    return (
      <div className="sign-in-page">
        <h2>Sign Up</h2>
        <SignUpForm />
      </div>
    );
  }
}
