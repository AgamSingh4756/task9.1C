import React from 'react';
import { useLocation } from 'react-router-dom';
import './LoginPage.css';
import { Signin } from './Login';

function LoginPage() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="login-page">
      {isLoginPage && (
        <div>
          <Signin/>
        </div>
      )}
    </div>
  );
}

export default LoginPage;

