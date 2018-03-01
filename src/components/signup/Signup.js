import React from 'react';

export default class Signup extends React.Component {

  render() {
    return (
        <form action="" className="signup">
            <h2>Sign up for an account</h2>
            <label htmlFor="login-email">Email</label>
            <input id="signup-email" type="text"/>
            <label htmlFor="signup-password">Password</label>
            <input id="signup-password" type="password"/>
            <label htmlFor="signup-password">Confirm Password</label>
            <input id="signup-password-confirm" type="password"/>
            <input id="signup-name" type="text"/>
            <label htmlFor="signup-name">Display Name</label>
            <input id="signup-name" type="text"/>
            <a href='/'>Back</a>
            <button type="submit">Submit</button>
        </form>
    );
  }
}
