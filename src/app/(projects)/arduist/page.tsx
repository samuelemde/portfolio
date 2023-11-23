import designImage from "@/images/arduist/design.webp";
import machineFront from "@/images/arduist/machine-front.webp";
import machineBack from "@/images/arduist/machine-back.webp";
import arduino2 from "@/images/arduist/arduino2.webp";
import arduino1 from "@/images/arduist/arduino1.webp";
import machine1 from "@/images/arduist/machine1.webp";
import machine2 from "@/images/arduist/machine2.webp";
import { getIsSsrMobile } from "~/lib/mobileDetect";
import Header from "~/components/Header";
import FullBleed from "~/components/FullBleed";
import { projects } from "~/lib/data/projects";
import Link from "next/link";
import LightBoxImage from "~/components/LightBoxImage";
import appImage from "@/images/arduist/app.webp";
import Footer from "~/components/Footer";

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
  { src: arduino2, alt: "Arduino Uno with motor shield" },
  { src: arduino1, alt: "Arduino Uno with motor shield and stepper motor" },
  { src: machine1, alt: "Stepper motor" },
  { src: machine2, alt: "Arduino Uno mounted on the machine" },
];

export default function ArduistPage() {
  const isSsrMobile = getIsSsrMobile();

  return (
    <>
      <Header isSsrMobile={isSsrMobile} initialTitle="SE" />
      <FullBleed
        src={projects.arduist.image.coverImage}
        title={projects.arduist.title}
        opacity={0.2}
      />
      <div className="flex flex-col items-center justify-center gap-20 px-8 pb-60 pt-10 lg:px-12">
        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="font-heading text-3xl uppercase italic">Summary</h2>
          <p className="text-sm italic">
            Arduist is an Arduino driven drawing machine, built by Joel Gschwind
            and Samuel Emde.
          </p>
          <p className="pt-4 text-lg tracking-wider">
            As part of the course Computer Architecture and Operating Systems we
            built an arduino powered drawing machine that can turn images into
            single-line drawings.
          </p>
          <p className="pt-4 text-lg tracking-wider">
            The first part of the project is a Java application that can be used
            to preview and generate the files that can then be printed by the
            machine. The application provides three different algorithms to
            generate line drawings, as well as some customization options for
            each method.
          </p>
          <p className="pt-4 text-lg tracking-wider">
            The second part is the actual drawing machine, consisting of an
            easel and a pen hanging on two strings, the position of which can be
            controlled by two stepper motors that are controlled by an arduino
            UNO.
          </p>
          <p className="text- pt-4 text-sm italic">
            <Link
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/samuelemde/arduist"
            >
              see on GitHub
            </Link>
          </p>
        </div>
        <div className={"relative w-full items-center justify-center md:w-2/3"}>
          <LightBoxImage
            src={appImage}
            alt={"Arduist App"}
            sizes={"(min-width: 768px) 66vw, 100vw"}
          />
        </div>
        <div className="grid h-full w-full grid-cols-1 gap-y-20 md:gap-12 md:p-6 lg:grid-cols-2">
          {images.map((image) => (
            <LightBoxImage
              key={image.alt}
              src={image.src}
              alt={image.alt}
              className={image.className}
              sizes={"(min-width: 1024px) 50vw, 100vw"}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
