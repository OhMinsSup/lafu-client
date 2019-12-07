import React from 'react';
import AuthModal from '../../components/login/AuthModal';
import EmailLoginForm from '../../components/login/EmailLoginForm';

const AuthModalContainer = () => {
  return (
    <AuthModal visible={false} onClose={() => ({})}>
      <EmailLoginForm />
    </AuthModal>
  );
};

export default AuthModalContainer;
