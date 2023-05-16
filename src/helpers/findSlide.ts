import { history, heroImages } from "../constants";

export const findSlide = (
  slides: number[],
  num: number
): {
  slideText: string;
  slideImage: string;
} | null => {
  const slideText: string = history[slides.indexOf(num)];
  const slideImage: string = heroImages[slides.indexOf(num)];

  return slides.includes(num) ? { slideText, slideImage } : null;
};
