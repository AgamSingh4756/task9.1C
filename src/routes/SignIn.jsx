import React from 'react';
import { useLocation } from 'react-router-dom';
import { Auth } from './auth';

function SignInPage() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="Signin-page">
      {isLoginPage && (
        <div>
            <Auth/>
        </div>
      )}
    </div>
  );
}

export default LoginPage;

