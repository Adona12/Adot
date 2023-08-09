import { cookies } from 'next/headers'

export const setCookie = (key: string, value: string, options?: object) => {
    cookies().set(key, value);
};

export const getCookie = (key: string) => {
  return cookies().get(key);
};

// export const removeCookie = (key: string) => {
//   Cookies.remove(key);
// };