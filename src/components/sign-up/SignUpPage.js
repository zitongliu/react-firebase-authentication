import React from 'react';
import {withRouter} from 'react-router-dom';

import SignUpForm from './SignUpForm';

const SignUpPage = ({history}) => {
  return (
    <div className="sign-in-page">
      <h2>Sign Up</h2>
      <SignUpForm history={history}/>
    </div>
  );
}

// withRouter is a higher order component which gives SignUpPage access to router properties (such as history) via props.
export default withRouter(SignUpPage);
