export interface APIResponse<R = any> {
  message: string;
  resultCode: number;
  data: R;
}

export enum OptionName {
  HomeCustom = "home_custom",
  HomeDefault = "home_default",
}

export enum Medium {
  Tva = "TVA",
  극장판 = "극장판",
  웹애니메이션 = "웹 애니메이션",
}

export enum ContentRating {
  The12세이용가 = "12세 이용가",
  The15세이용가 = "15세 이용가",
  성인이용가 = "성인 이용가",
  전체이용가 = "전체 이용가",
}
