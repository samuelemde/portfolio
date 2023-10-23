"use client";

import FullBleed from "~/components/FullBleed";
import Link from "next/link";
import { projectQuerySchema } from "~/lib/utils";
import { useSearchParams } from "next/navigation";
import Header from "~/components/Header";
import { projects } from "~/lib/projects";
import LightBoxImage from "~/components/LightBoxImage";
import appImage from "@/images/arduist/app.png";
import Footer from "~/components/Footer";
import { type Image } from "~/lib/types";

type ArduistPageProps = {
  isSsrMobile: boolean;
  images: Image[];
};

export default function ArduistPage({ isSsrMobile, images }: ArduistPageProps) {
  const searchParams = useSearchParams();

  let titleColor;
  const queryParseResult = projectQuerySchema.safeParse(searchParams);
  if (queryParseResult.success) titleColor = queryParseResult.data.titleColor;

  return (
    <>
      <Header
        titleColorClass={titleColor}
        initialTitle={"SE"}
        isSsrMobile={isSsrMobile}
      />
      <FullBleed
        src={projects.arduist.coverImage}
        title={projects.arduist.title}
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
