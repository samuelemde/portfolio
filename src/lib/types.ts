import { type StaticImageData } from "next/image";

export type Image = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
};
