import client from "./client";

import type {
  CarouseListResponse,
  RecommendListResponse,
} from "./model/main/main.model";

export const GET_MAIN_CAROUSE_KEY = "getMainCarouselAPI";
export const GET_MAIN_RECOMMEND_KEY = "";

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
