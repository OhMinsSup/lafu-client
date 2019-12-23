import snakeCaseKeys from 'snakecase-keys';
import apiClient from './apiClient';
import { SendAuthEmailResponse, GetRegisterTokenResponse, AuthResponse } from './models';

/**
 * Send Auth Email
 * docs: https://documenter.getpostman.com/view/723994/S11RJuhq#7933badc-b964-4b84-88ff-4119134925a8
 * @param email
 */
export const sendAuthEmail = (email: string) =>
  apiClient.post<SendAuthEmailResponse>('/api/v1/auth/sendEmail', {
    email,
  });

/**
 * Get Register Token using code
 * docs: https://documenter.getpostman.com/view/723994/S11RJuhq#ceb55dc0-68f7-4b74-9d30-4e8ce86da988
 * @param code
 */
export const getRegisterToken = (code: string) =>
  apiClient.get<GetRegisterTokenResponse>(`/api/v1/auth/code/${code}`);

export const localEmailRegister = ({
  registerToken,
  form,
}: {
  registerToken: string;
  form: SignupFormData;
}) =>
  apiClient.post<AuthResponse>(
    '/api/v1/auth/register/local',
    snakeCaseKeys({ registerToken, form }),
  );

type SignupFormData = {
  displayName: string;
  username: string;
  shortBio: string;
};
