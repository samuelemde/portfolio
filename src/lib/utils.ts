import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffle<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j]!, array[i]!];
  }
  return array;
}

export function scale(
  value: number,
  min: number,
  max: number,
  newMin: number,
  newMax: number,
): number {
  const scaledValue =
    ((value - min) / (max - min)) * (newMax - newMin) + newMin;
  return Math.min(Math.max(scaledValue, newMin), newMax);
}

export const projectQuerySchema = z.object({
  titleColor: z.string().optional(),
});
