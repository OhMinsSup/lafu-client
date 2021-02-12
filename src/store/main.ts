import { writable } from "svelte/store";
import type { MyInfoModel } from "~/libs/apis/model/main/main.model";

export const browserWidth = writable<number>(0);

export const myInfoState = writable<MyInfoModel | null>(null);
