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
  return ((value - min) / (max - min)) * (newMax - newMin) + newMin;
}

export const projectQuerySchema = z.object({
  titleColor: z.string().optional(),
});

export const StringToBoolean = z
  .custom((value) => value === "true" || value === "false", {
    message: 'Must be "true" or "false"',
  })
  .transform((value) => value === "true");

export const homeQuerySchema = z.object({
  startAnimation: StringToBoolean.optional().default(true),
});

export const projectColors = [
  "text-project1",
  "text-project2",
  "text-project3",
  "text-project4",
  "text-project5",
  "text-project6",
  "text-project7",
];
