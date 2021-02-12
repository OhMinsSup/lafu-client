import client from "./client";

import type {
  CarouseListResponse,
  MyInfoResponse,
  RecommendListResponse,
} from "./model/main/main.model";

export const GET_MAIN_CAROUSE_KEY = "getMainCarouselAPI";
export const GET_MAIN_RECOMMEND_KEY = "getRecommendAPI";
export const GET_MAIN_MYINFO_KEY = "getMyInfoAPI";

export const getMainCarouselAPI = async () => {
  return client.get<CarouseListResponse>("carousel/list").then((res) => ({
    ...res.data,
    status: res.status,
  }));
};

export const getMainRecommendAPI = async () => {
  return client
    .get<RecommendListResponse>("recommend/list?listType=1")
    .then((res) => ({
      ...res.data,
      status: res.status,
    }));
};

export const getMyInfoAPI = async () => {
  return client.get<MyInfoResponse>("user/membership/status/").then((res) => ({
    ...res.data,
    status: res.status,
  }));
};
