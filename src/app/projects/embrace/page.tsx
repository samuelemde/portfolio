import EmbracePage from "~/app/projects/embrace/embrace-page";
import { getIsSsrMobile } from "~/lib/mobileDetect";
import embraceBooklet from "@/images/embrace/embrace-booklet.png";
import embracePasquart from "@/images/embrace/embrace-pasquart.jpg";

export default function Page() {
  const images = [
    { src: embraceBooklet, alt: "Embrace 1 - Booklet" },
    {
      src: embracePasquart,
      alt: "Embrace 1 - Centre d’art Pasquart",
    },
  ];

  return <EmbracePage images={images} isSsrMobile={getIsSsrMobile()} />;
}
