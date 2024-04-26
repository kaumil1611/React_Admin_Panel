import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthGuard = (Component) => {
    console.log(Component)
  const AuthGuardedComponent = (props) => {
    const location = useLocation();
    const isAuthenticated = false; // Hard-coding isAuthenticated to false

    // Check if the user is authenticated
    if (!isAuthenticated) {
      // If not authenticated, redirect to the login page with the current location
      console.log("dfhsjdhgfjsdgfjhg");
      return (
        <Navigate
          to={`/pages/login/login3?redirectTo=${location.pathname}`}
          replace
        />
      );
    }

    // If authenticated, render the requested component
    return <Component {...props} />;
  };

  return AuthGuardedComponent;
};

export default AuthGuard;
