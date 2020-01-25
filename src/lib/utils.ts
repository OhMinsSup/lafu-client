export const checker = {
  youtube: (text: string) => {
    const regex = /^<iframe.*src="https:\/\/www.youtube.com\/embed\/(.*?)".*<\/iframe>$/;
    const result = regex.exec(text);
    if (!result) return null;
    return result[1];
  },
  twitter: (text: string) => {
    if (!/^<blockquote class="twitter-tweet/.test(text)) return null;
    const regex = /href="(.*?)"/g;
    const links = [];
    let match = regex.exec(text);
    while (match) {
      links.push(match[1]);
      match = regex.exec(text);
    }
    const pathMatch = /twitter.com\/(.*?)\?/.exec(links[links.length - 1]);
    if (!pathMatch) return null;
    return pathMatch[1];
  },
  codesandbox: (text: string) => {
    const regex = /^<iframe src="https:\/\/codesandbox.io\/embed\/(.*?)".*<\/iframe>$/;
    const result = regex.exec(text);
    if (!result) return null;
    return result[1];
  },
};

export type CheckerKey = keyof typeof checker;

export const checkEmbed = (text: string) => {
  const keys = Object.keys(checker) as CheckerKey[];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const fn = checker[keys[i]];
    const code = fn(text);
    if (code) {
      return `!${key}[${code}]`;
    }
  }
  return null;
};

export function detectJSDOM() {
  if (typeof navigator === 'undefined') return false;
  return navigator.userAgent.includes('jsdom');
}

export function loadScript(url: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.onload = function onload() {
      resolve();
    };
    script.onerror = function onerror() {
      reject();
    };
    script.src = url;
    if (!document || !document.head) return;
    document.head.appendChild(script);
  });
}

export const ssrEnabled = process.env.REACT_APP_SSR === 'enabled';