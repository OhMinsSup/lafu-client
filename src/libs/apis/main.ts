import client from "./client";

import type { CarouseListResponse } from "./model/main/main.model";

export const GET_MAIN_CAROUSE_KEY = "getMainCarouselAPI";
export const getMainCarouselAPI = async () => {
  return client.get<CarouseListResponse>("carousel/list");
};
