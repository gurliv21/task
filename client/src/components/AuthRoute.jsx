import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AuthRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token'); // Get token from localStorage

  return (
    <Route
      {...rest}
      element={token ? <Component /> : <Navigate to="/login" />} // If token exists, render the component, else redirect to login
    />
  );
};

export default AuthRoute;
