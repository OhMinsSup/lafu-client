import React, { useCallback } from 'react';
import { History } from 'history';
import LoginForm from '../../components/login/LoginForm';
import useRequest from '../../lib/hooks/useRequest';
import { sendAuthEmail } from '../../lib/api/auth';
import { SendAuthEmailResponse } from '../../lib/api/models';

interface LoginFormContainerProps {
  history: History<any>;
}

const LoginFormContainer = ({ history }: LoginFormContainerProps) => {
  const [_sendAuthEmail, loading, data, code] = useRequest<
    SendAuthEmailResponse
  >(sendAuthEmail);

  const registered = code === 200 ? data && data.payload.registered : null;

  const onSendAuthEmail = useCallback(
    async (email: string) => {
      _sendAuthEmail(email);
    },
    [_sendAuthEmail],
  );

  return (
    <LoginForm
      loading={loading}
      registered={registered}
      onSendAuthEmail={onSendAuthEmail}
      history={history}
    />
  );
};

export default LoginFormContainer;
