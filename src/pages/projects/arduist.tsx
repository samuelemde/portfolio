import FullBleed from "~/components/FullBleed";
import Link from "next/link";
import Image from "next/image";
import { cn, projectQuerySchema } from "~/lib/utils";
import { useRouter } from "next/router";
import Header from "~/components/Header";

const images = [
  {
    src: "/images/arduist/design.png",
    alt: "Design drawings",
    className: "col-span-2",
  },
  {
    src: "/images/arduist/machine-front.jpg",
    alt: "Arduist machine front",
  },
  { src: "/images/arduist/machine-back.jpg", alt: "Arduist machine back" },
  { src: "/images/arduist/arduino2.jpg", alt: "Arduist machine back" },
  { src: "/images/arduist/arduino1.jpg", alt: "Arduist machine back" },
  { src: "/images/arduist/machine1.jpg", alt: "Arduist machine back" },
  { src: "/images/arduist/machine2.jpg", alt: "Arduist machine back" },
];

export default function ArduistPage() {
  const { query } = useRouter();
  const { titleColor } = projectQuerySchema.parse(query);

  return (
    <>
      <Header titleColorClass={titleColor} initialTitle={"SE"} />
      <FullBleed
        src={"/images/arduist/cover-full.png"}
        title={"Arduist"}
        opacity={0.2}
        titleColorClass={titleColor}
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
        <div className={"relative w-2/3 items-center justify-center"}>
          <Image
            className={"!relative object-cover"}
            src={"/images/arduist/app.png"}
            alt={"Arduist App"}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
        <div className="grid h-full w-full grid-cols-1 gap-12 gap-y-20 p-6 lg:grid-cols-2">
          {images.map((image) => (
            <div
              key={image.src}
              className={cn("relative", image.className ?? "")}
            >
              <Image
                className="!relative object-cover"
                src={image.src}
                alt={image.alt}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
