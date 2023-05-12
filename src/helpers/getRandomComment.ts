import { enemiesComments, enemiesImages } from "../constants";

export const getRandomComment = (): [string, string] => {
  const getRandom = (arr: string[]): string => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  return [getRandom(enemiesComments), getRandom(enemiesImages)];
};
