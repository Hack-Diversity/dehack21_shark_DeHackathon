import React from 'react';
import './Login.css';

const Logout = props => {
  localStorage.removeItem('loginStatus');
  window.alert('successfuly logged out');
  props.history.push('/');
  window.location.reload(false);
  return <h1>login out</h1>;
};

export default Logout;
