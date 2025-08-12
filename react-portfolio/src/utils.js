// src/utils.js

console.log(new URL('../assets/nav/menuIcon.png', import.meta.url).href);

export const getImageUrl = (path) => {
  return (`/assets/${path}`);
};
