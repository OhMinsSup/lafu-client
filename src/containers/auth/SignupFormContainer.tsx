/* eslint-disable no-restricted-globals */
import React from 'react';
import { History } from 'history';
import qs from 'qs';
import SignupForm, { SignupFormType } from '../../components/signup/SignupForm';
import { getRegisterToken, localEmailRegister } from '../../lib/api/auth';
import useRequest from '../../lib/hooks/useRequest';
import { GetRegisterTokenResponse, AuthResponse } from '../../lib/api/models';

type Query = {
  code?: string;
  social?: string;
};

interface SignupFormContainerProps {
  history: History<any>;
}

const SignupFormContainer = ({ history }: SignupFormContainerProps) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }) as Query;

  const [error, setError] = React.useState<null | string>(null);

  const [onLocalRegister] = useRequest<AuthResponse>(localEmailRegister);
  const [onGetRegisterToken, , registerToken] = useRequest<
    GetRegisterTokenResponse
  >((code: string) => getRegisterToken(code));

  const onSignup = async (form: SignupFormType) => {
    setError(null);

    const validation = {
      displayName: (text: string) => {
        if (text === '') {
          return '이름을 입력해주세요.';
        }
        if (text.length > 45) {
          return '이름은 최대 45자까지 입력 할 수 있습니다.';
        }
      },
      username: (text: string) => {
        if (!/^[a-z0-9-_]{3,16}$/.test(text)) {
          return '아이디는 3~16자의 알파벳,숫자,혹은 - _ 으로 이루어져야 합니다.';
        }
      },
      shortBio: (text: string) => {
        if (text.length > 140) {
          return `한 줄 소개는 140자 미만으로 입력해주세요. (현재 ${text.length}자)`;
        }
      },
    };

    const error =
      validation.displayName(form.displayName) ||
      validation.username(form.username) ||
      validation.shortBio(form.shortBio) ||
      null;

    if (error) {
      setError(error);
      return false;
    }

    try {
      if (query.code) {
        const formWithoutEmail = { ...form };
        delete formWithoutEmail.email;
        await onLocalRegister({
          registerToken: registerToken && registerToken.payload.register_token,
          form: formWithoutEmail,
        });
      } else if (query.social) {
        // TODO Social
      }
    } catch (e) {
      console.log(e);
    } finally {
      return true;
    }
  };

  React.useEffect(() => {
    if (!query.code) {
      // TODO: show error page
      return;
    }
    onGetRegisterToken(query.code);
  }, [onGetRegisterToken, query.code]);

  React.useEffect(() => {
    if (!query.social) return;
  }, [query.social]);

  return (
    <SignupForm
      onSignup={onSignup}
      error={error}
      disabledEmail={
        registerToken &&
        (registerToken.payload.register_token && registerToken.payload.email)
      }
    />
  );
};

export default SignupFormContainer;
