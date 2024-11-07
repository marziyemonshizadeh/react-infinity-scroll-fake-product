import { Products } from "./faker";

const LIMIT = 20;

export function fetchItems({ pageParam }) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: Products.slice(pageParam, pageParam + LIMIT),
        currentPage: pageParam,
        nextPage:
          pageParam + LIMIT < Products.length ? pageParam + LIMIT : null,
      });
    }, 1000);
  });
}
