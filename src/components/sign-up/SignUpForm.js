import React from 'react';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

export default class SignUpForm extends React.Component {
  constructor() {
    super();

    this.state = { ...INITIAL_STATE};

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    console.log('the submit button was clicked');
    e.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this._handleSubmit} className="signup">
            <label htmlFor="signup-username">Username</label>
            <input id="signup-username" type="text" placeholder="Display Name" onChange={e => this.setState({['username']:e.target.value})} />
            <label htmlFor="login-email">Email</label>
            <input id="signup-email" type="text" placeholder="example@email.com" onChange={e => this.setState({['email']:e.target.value})} />
            <label htmlFor="signup-password">Password</label>
            <input id="signup-password" type="password" onChange={e => this.setState({['passwordOne']:e.target.value})} />
            <label htmlFor="signup-password">Confirm Password</label>
            <input id="signup-password-confirm" type="password" onChange={e => this.setState({['passwordTwo']:e.target.value})} />
            <a href='/'>Back</a>
            <button type="submit">Submit</button>
        </form>
    );
  }
}
