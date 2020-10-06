/* eslint-disable import/prefer-default-export */
export const getRandomStr = () => Math.random()
  .toString(36)
  .substring(2, 15)
  + Math.random()
    .toString(36)
    .substring(2, 15);
