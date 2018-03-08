import React from 'react';
import {withRouter, Link} from 'react-router-dom';

import * as routes from '../../constants/routes';

import SignUpForm from './SignUpForm';

const SignUpPage = ({history}) => {
  return (
    <div className="sign-in-page">
      <h2>Sign Up</h2>
      <SignUpForm history={history}/>
    </div>
  );
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGNUP}>Sign Up</Link>
  </p>

// withRouter is a higher order component which gives SignUpPage access to router properties (such as history) via props.
export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
}
