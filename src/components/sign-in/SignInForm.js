import React from 'react';

export default class Login extends React.Component {

  render() {
    return (
        <form action="" className="login">
            <label htmlFor="login-email">Email</label>
            <input id="login-email" type="text"/>
            <label htmlFor="login-password">Password</label>
            <input id="login-password" type="password"/>
            <button>Submit</button>
        </form>
    );
  }
}
