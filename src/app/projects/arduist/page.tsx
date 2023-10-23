import ArduistPage from "~/app/projects/arduist/arduist-page";
import designImage from "@/images/arduist/design.png";
import machineFront from "@/images/arduist/machine-front.jpg";
import machineBack from "@/images/arduist/machine-back.jpg";
import arduino2 from "@/images/arduist/arduino2.jpg";
import arduino1 from "@/images/arduist/arduino1.jpg";
import machine1 from "@/images/arduist/machine1.jpg";
import machine2 from "@/images/arduist/machine2.jpg";
import { getIsSsrMobile } from "~/lib/mobileDetect";

export default function Page() {
  const images = [
    {
      src: designImage,
      alt: "Design drawings",
      className: "col-span-1 lg:col-span-2",
    },
    {
      src: machineFront,
      alt: "Arduist machine front",
    },
    { src: machineBack, alt: "Arduist machine back" },
    { src: arduino2, alt: "Arduist machine back" },
    { src: arduino1, alt: "Arduist machine back" },
    { src: machine1, alt: "Arduist machine back" },
    { src: machine2, alt: "Arduist machine back" },
  ];

  return <ArduistPage images={images} isSsrMobile={getIsSsrMobile()} />;
}
