export type SendAuthEmailResponse = {
  payload: {
    registered: boolean;
  };
};

export type GetRegisterTokenResponse = {
  payload: {
    email: string;
    register_token: string;
  };
};

export type AuthResponse = {
  email: string;
  username: string;
  id: string;
  created_at: string;
  updated_at: string;
  profile: {
    fk_user_id: string;
    display_name: string;
    short_bio: string;
    thumbnail: null;
    id: string;
    created_at: string;
    updated_at: string;
    profile_links: any;
  };
  tokens: {
    access_token: string;
    refresh_token: string;
  };
};