import { useQuery } from "@sveltestack/svelte-query";
import {
  getMainCarouselAPI,
  getMainRecommendAPI,
  GET_MAIN_CAROUSE_KEY,
  GET_MAIN_RECOMMEND_KEY,
} from "../apis/main";

export function useCarouselQuery() {
  const queryResult = useQuery(GET_MAIN_CAROUSE_KEY, getMainCarouselAPI, {
    retry: false,
    onSuccess: (result) => {
      return {
        ...result,
      };
    },
  });

  return queryResult;
}

export function useRecommendQuery() {
  const queryResult = useQuery(GET_MAIN_RECOMMEND_KEY, getMainRecommendAPI, {
    retry: false,
    onSuccess: (result) => {
      return {
        ...result,
      };
    },
  });

  return queryResult;
}
