import type {
  APIResponse,
  Medium,
  OptionName,
  ContentRating,
} from "../common/common.model";

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

export interface ItemList {
  id: number;
  name: string;
  images: Image[];
  is_adult: boolean;
  is_uncensored: boolean;
  is_dubbed: boolean;
  medium: Medium;
  is_laftel_only: boolean;
  content_rating: ContentRating;
  is_ending: boolean;
  genre: string[];
  content: string;
  avg_rating: number;
  is_avod: boolean;
}

export interface Image {
  option_name: OptionName;
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
