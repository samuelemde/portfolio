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
    href: "projects/nfn",
    image: {
      alt: "Named Function Networking",
      previewImage: nfnImage,
      coverImage: nfnImage,
      priority: true,
    },
  },
  embrace: {
    title: "Embrace",
    href: "projects/embrace",
    image: {
      alt: "Embrace",
      previewImage: embraceImage,
      coverImage: embraceImage,
      priority: true,
    },
  },
  arduist: {
    title: "Arduist",
    href: "projects/arduist",
    image: {
      alt: "Arduist",
      previewImage: arduistImage,
      coverImage: arduistCover,
      priority: false,
    },
  },
  zuhoeren: {
    title: "Zuhören",
    href: "projects/zuhoeren",
    image: {
      alt: "Zuhören",
      previewImage: headPhonesImage,
      coverImage: headPhonesImage,
      priority: false,
    },
  },
  namelesslands: {
    title: "Name&#8203;less Lands",
    href: "projects/nameless-lands",
    image: {
      alt: "Nameless Lands",
      previewImage: namelessLandsMap,
      coverImage: namelessLandsMapClean,
      priority: false,
    },
  },
  dreiundzwanzig: {
    title: "Dreiund&#8203;zwanzig",
    href: "projects/dreiundzwanzig",
    image: {
      alt: "Dreiundzwanzig",
      previewImage: dreiundzwanzigCover,
      coverImage: dreiundzwanzigImage,
      priority: false,
    },
  },
};
export const links: LinkType[] = Object.values(projects).map(
  ({ title, href }) => ({
    title,
    href,
  }),
);
