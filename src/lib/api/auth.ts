import apiClient from './apiClient';
import { SendAuthEmailResponse } from './models';

/**
 * Send Auth Email
 * docs: https://documenter.getpostman.com/view/723994/S11RJuhq#7933badc-b964-4b84-88ff-4119134925a8
 * @param email
 */
export const sendAuthEmail = (email: string) =>
  apiClient.post<SendAuthEmailResponse>('/api/v1/auth/sendEmail', {
    email,
  });

