import NFNPage from "~/app/projects/nfn/nfn-page";
import { getIsSsrMobile } from "~/lib/mobileDetect";
import classified2 from "@/images/nfn/classified2.jpg";
import classified3 from "@/images/nfn/classified3.jpg";
import dispmap2 from "@/images/nfn/dispmap2.jpg";
import dispmap3 from "@/images/nfn/dispmap3.jpg";
import combined0 from "@/images/nfn/combined0.jpg";
import combined1 from "@/images/nfn/combined1.jpg";

export default function Page() {
  const images = [
    {
      src: classified2,
      alt: "Input image #1 - Vehicle approaching an intersection (position of pin in the map at the bottom)",
    },
    {
      src: classified3,
      alt: "Input image #2 - View around the left corner",
    },
    {
      src: dispmap2,
      alt: "Disparity map #1",
    },
    {
      src: dispmap3,
      alt: "Disparity map #2",
    },
    {
      src: combined0,
      alt: "Combined disparity with classification #1",
    },
    {
      src: combined1,
      alt: "Combined disparity with classification #2",
    },
  ];

  return <NFNPage images={images} isSsrMobile={getIsSsrMobile()} />;
}
