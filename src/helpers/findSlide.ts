import { history, heroImages, subtext } from "../constants";

export const findSlide = (
  slides: number[],
  num: number
): {
  slideText: string;
  slideImage: string;
  slideSubtext?: string;
} | null => {
  const slideText: string = history[slides.indexOf(num)];
  const slideSubtext: string = subtext[slides.indexOf(num)]
  const slideImage: string = heroImages[slides.indexOf(num)];

  return slides.includes(num) ? { slideText, slideSubtext, slideImage } : null;
};
