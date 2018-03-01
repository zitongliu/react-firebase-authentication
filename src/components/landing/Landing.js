import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

export default class Landing extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <Link to={routes.LOGIN}>Login</Link>
        <Link to={routes.SIGNUP}>Sign up</Link>
      </div>
    );
  }
}
