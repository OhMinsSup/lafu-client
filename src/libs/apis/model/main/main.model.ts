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

export interface CarouseListResponse {
  message: string;
  resultCode: number;
  data: CarouselModel[];
}
