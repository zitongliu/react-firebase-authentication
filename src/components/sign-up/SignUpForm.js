import React from 'react';
import { auth } from '../../firebase';

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

  _handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, passwordOne } = this.state;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
    });
  }

  render() {
    const {username, email, passwordOne, passwordTwo, error} = this.state;

    const isInvalid = passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
        <form onSubmit={this._handleSubmit} className="signup">
            <label htmlFor="signup-username">Username</label>
            <input id="signup-username" type="text" placeholder="Display Name" onChange={e => this.setState(byPropKey('username', e.target.value))} value={username} />
            <label htmlFor="login-email">Email</label>
            <input id="signup-email" type="text" placeholder="example@email.com" onChange={e => this.setState(byPropKey('email', e.target.value))} value={email} />
            <label htmlFor="signup-password">Password</label>
            <input id="signup-password" type="password" onChange={e => this.setState(byPropKey('passwordOne', e.target.value))} value={passwordOne} />
            <label htmlFor="signup-password">Confirm Password</label>
            <input id="signup-password-confirm" type="password" onChange={e => this.setState(byPropKey('passwordTwo', e.target.value))} value={passwordTwo} />
            <a href='/'>Back</a>
            <button disabled={isInvalid} type="submit">Submit</button>
            { error && <p>{error.message}</p> }
        </form>
    );
  }
}
