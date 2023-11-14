import { type StaticImageData } from "next/image";

export type Image = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
};

export type LinkType = {
  title: string;
  href: string;
};

export type Project = {
  title: string;
  href: string;
  image: {
    alt: string;
    previewImage: StaticImageData;
    coverImage: StaticImageData;
    priority: boolean;
  };
};
