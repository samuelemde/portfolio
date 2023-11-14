import nfnCover from "@/images/nfn/nfn.jpeg";
import nfnPreview from "@/images/nfn/nfn-square.jpg";
import embracePreview from "@/images/embrace/embrace-square.jpg";
import embraceCover from "@/images/embrace/embrace1.jpeg";
import arduistPreview from "@/images/arduist/arduist-square.jpg";
import arduistCover from "@/images/arduist/cover-full.png";
import zuhoerenPreview from "@/images/zuhoeren/headphones-square.jpg";
import zuhoerenCover from "@/images/zuhoeren/headphones2.jpeg";
import namelessPreview from "@/images/namelesslands/map-square.jpg";
import namelessCover from "@/images/namelesslands/map-clean.jpg";
import dreiundzwanzigCover from "@/images/dreiundzwanzig/amorph.jpg";
import dreiundzwanzigPreview from "@/images/dreiundzwanzig/cover-square.jpg";
import { type LinkType } from "~/lib/types";

export const projects = {
  nfn: {
    title: "Named<br/>Function<br/>Networking",
    href: "nfn",
    image: {
      alt: "Named Function Networking",
      previewImage: nfnPreview,
      coverImage: nfnCover,
      priority: true,
    },
  },
  embrace: {
    title: "Embrace",
    href: "embrace",
    image: {
      alt: "Embrace",
      previewImage: embracePreview,
      coverImage: embraceCover,
      priority: true,
    },
  },
  arduist: {
    title: "Arduist",
    href: "arduist",
    image: {
      alt: "Arduist",
      previewImage: arduistPreview,
      coverImage: arduistCover,
      priority: false,
    },
  },
  zuhoeren: {
    title: "Zuhören",
    href: "zuhoeren",
    image: {
      alt: "Zuhören",
      previewImage: zuhoerenPreview,
      coverImage: zuhoerenCover,
      priority: false,
    },
  },
  namelesslands: {
    title: "Name&#8203;less Lands",
    href: "nameless-lands",
    image: {
      alt: "Nameless Lands",
      previewImage: namelessPreview,
      coverImage: namelessCover,
      priority: false,
    },
  },
  dreiundzwanzig: {
    title: "Dreiund&#8203;zwanzig",
    href: "dreiundzwanzig",
    image: {
      alt: "Dreiundzwanzig",
      previewImage: dreiundzwanzigPreview,
      coverImage: dreiundzwanzigCover,
      priority: false,
    },
  },
};
export const links: LinkType[] = Object.values(projects)
  .map(({ title, href }) => ({
    title,
    href,
  }))
  .concat([{ title: "About Me", href: "/about" }]);
