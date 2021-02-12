import type { Action } from "./types";

export function delay<D = any>(time: number, data: D): Promise<D> {
  return new Promise((resolve) => setTimeout(() => resolve(data), time));
}

export const getScrollTop = () => {
  if (!document.body) return 0;
  const scrollTop = document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop;
  return scrollTop;
};

export const getScrollBottom = () => {
  if (!document.body) return 0;
  const { scrollHeight } = document.body;
  const { innerHeight } = window;
  const scrollTop = getScrollTop();
  return scrollHeight - innerHeight - scrollTop;
};

export function clickOutside(
  node: HTMLElement,
  params: { enabled: boolean; cb: Function }
): ReturnType<Action> {
  const { enabled: initialEnabled, cb } = params;

  const handleOutsideClick = ({ target }: MouseEvent) => {
    if (!node.contains(target as Node)) cb(); // typescript hack, not sure how to solve without asserting as Node
  };

  function update({ enabled }: { enabled: boolean }) {
    if (enabled) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }
  }
  update({ enabled: initialEnabled });
  return {
    update,
    destroy() {
      window.removeEventListener("click", handleOutsideClick);
    },
  };
}
