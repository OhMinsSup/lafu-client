import type {
  APIResponse,
  Medium,
  OptionName,
  ContentRating,
} from "../common/common.model";

// carousel

export interface CarouselModel {
  id: number;
  web_img: string;
  mobile_img: string;
  logo_img: string;
  content: string;
  label: string;
  button_text: string;
  is_adult: boolean;
}

export type CarouseListResponse = APIResponse<CarouselModel[]>;

// recommand

export interface ItemList {
  id: number | string;
  name: string;
  images: Image[];
  is_adult: boolean;
  is_uncensored: boolean;
  is_dubbed: boolean;
  medium: Medium | string;
  is_laftel_only: boolean;
  content_rating: ContentRating | any;
  is_ending: boolean;
  genre: string[];
  content: string;
  avg_rating: number;
  is_avod: boolean;
}

export interface Image {
  option_name: OptionName | string;
  img_url: string;
  crop_ratio: string;
}

export interface RecommendModel {
  id: number;
  type: string;
  name: string;
  item_list: ItemList[];
}

export type RecommendListResponse = APIResponse<RecommendModel[]>;

// my info

export interface Devices {
  app: App;
  web: Web;
}

export interface App {
  android: number;
}

export interface Web {
  linux: number;
  macintosh: number;
  "windows nt 10.0": number;
}

export interface PremiumLevel {
  level: number;
  name: string;
}

export interface MyInfoModel {
  id: number;
  img: string;
  last_login: Date;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  verified_email: string;
  date_joined: Date;
  content: string | null;
  url: string | null;
  gender: string | null;
  age: string | number | null;
  birth_year: string | null;
  country: string | null;
  occupation: any;
  lang: string | null;
  is_email: boolean;
  email_agreement_datetime: any;
  is_agree_to_terms: boolean;
  account_types: string[];
  asset_point: number;
  asset_period: any;
  asset_limited_point: number;
  is_staff: boolean;
  asset_limited_point_end_date: any;
  has_password: boolean;
  certified: boolean;
  is_adult: boolean;
  has_pay_password: boolean;
  referral_code: string;
  cnt_referral_set: number;
  free_trial: boolean;
  premium_level: PremiumLevel;
  devices: Devices;
}

export type MyInfoResponse = APIResponse<MyInfoModel>;
