import React, { useState } from 'react';
import LoginPage from '../../pages/client/auth/LoginPage';
import RegisterPage from '../../pages/client/auth/RegisterPage';

const AuthModal = ({ onClose }: { onClose: () => void }) => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="">
      {isLogin ? (
        <LoginPage
          onClose={onClose}
          switchToRegister={() => setIsLogin(false)}
        />
      ) : (
        <RegisterPage
          onClose={onClose}
          switchToLogin={() => setIsLogin(true)}
        />
      )}
    </div>
  );
};

export default AuthModal;
