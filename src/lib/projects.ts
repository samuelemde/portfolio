import nfnImage from "@/images/nfn/nfn.jpeg";
import embraceImage from "@/images/embrace/embrace1.jpeg";
import arduistImage from "@/images/arduist/arduist.png";
import arduistCover from "@/images/arduist/cover-full.png";
import headPhonesImage from "@/images/zuhoeren/headphones2.jpeg";
import namelessLandsMap from "@/images/namelesslands/map.jpg";
import namelessLandsMapClean from "@/images/namelesslands/map-clean.jpg";
import dreiundzwanzigImage from "@/images/dreiundzwanzig/amorph.jpg";
import dreiundzwanzigCover from "@/images/dreiundzwanzig/cover-clean.jpg";

export type LinkType = {
  title: string;
  href: string;
};

export const projects = {
  nfn: {
    title: "Named<br/>Function<br/>Networking",
    alt: "Named Function Networking",
    previewImage: nfnImage,
    coverImage: nfnImage,
    href: "projects/nfn",
  },
  embrace: {
    title: "Embrace",
    alt: "Embrace",
    previewImage: embraceImage,
    coverImage: embraceImage,
    href: "projects/embrace",
  },
  arduist: {
    title: "Arduist",
    alt: "Arduist",
    previewImage: arduistImage,
    coverImage: arduistCover,
    href: "projects/arduist",
  },
  zuhoeren: {
    title: "Zuhören",
    alt: "Zuhören",
    previewImage: headPhonesImage,
    coverImage: headPhonesImage,
    href: "projects/zuhoeren",
  },
  namelesslands: {
    alt: "Nameless Lands",
    title: "Name&#8203;less Lands",
    previewImage: namelessLandsMap,
    coverImage: namelessLandsMapClean,
    href: "projects/nameless-lands",
  },
  dreiundzwanzig: {
    title: "Dreiund&#8203;zwanzig",
    alt: "Dreiundzwanzig",
    previewImage: dreiundzwanzigCover,
    coverImage: dreiundzwanzigImage,
    href: "projects/dreiundzwanzig",
  },
};
export const links: LinkType[] = Object.values(projects).map(
  ({ title, href }) => ({
    title,
    href,
  }),
);
