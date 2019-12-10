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
  const [_sendAuthEmail, loading, data, resetSendAuthEmail] = useRequest<
    SendAuthEmailResponse
  >(sendAuthEmail);

  const registered = data && data.payload.registered;

  const onSendAuthEmail = useCallback(
    async (email: string) => {
      _sendAuthEmail(email);
    },
    [_sendAuthEmail],
  );
  return (
    <React.Fragment>
      <LandingFrom
        loading={loading}
        registered={registered}
        onSendAuthEmail={onSendAuthEmail}
        history={history}
      />
    </React.Fragment>
  );
};

export default LandingFormContainer;
