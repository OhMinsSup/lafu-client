import React, { useCallback } from 'react';
import { History } from 'history';
import LandingFrom from '../../components/landing/LandingForm';
import useRequest from '../../lib/hooks/useRequest';
import { sendAuthEmail } from '../../lib/api/auth';
import { SendAuthEmailResponse } from '../../lib/api/models';

interface LandingFormContainerProps {
  history: History<any>;
}

const LandingFormContainer = ({ history }: LandingFormContainerProps) => {
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
    <LandingFrom
      loading={loading}
      registered={registered}
      onSendAuthEmail={onSendAuthEmail}
      history={history}
    />
  );
};

export default LandingFormContainer;
