import { differenceInDays } from "date-fns";

export function formatPrice(price: number): string {
  return `$${price / 100}`;
}

export function pluralize(word: string, num: number): string {
  return num === 1 ? `1 ${word}` : `${num} ${word}s`;
}

export function isNewShoe(releaseDate: Date): boolean {
  return differenceInDays(new Date(), releaseDate) < 30;
}
