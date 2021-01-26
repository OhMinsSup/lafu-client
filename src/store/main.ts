import { writable } from "svelte/store";

export const browserWidth = writable<number>(0);

// export const homes = writable<any[]>([]);
// export const message = writable<string>("");
// export const status = writable<number>(0);
// export const loading = writable<boolean>(false);

// export function initMain() {
//   homes.set([]);
//   message.set("");
//   status.set(0);
//   loading.set(false);
// }

// export async function getHomes() {
//   if (get(loading)) return;
//   loading.set(true);
//   message.set("");

//   try {
//   } catch (e) {
//     console.error(e);

//     homes.set([]);
//     status.set(0);
//     message.set(e);
//     loading.set(false);
//     return;
//   }
// }
